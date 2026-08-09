import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signInWithPopup, 
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User as FirebaseUser
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, googleProvider, db } from './firebase';
import { UserProfile, FirestoreSimulator } from './firestoreSimulator';

export async function syncUserProfileToFirestore(userProfile: UserProfile): Promise<void> {
  try {
    const userRef = doc(db, 'users', userProfile.uid);
    await setDoc(userRef, {
      uid: userProfile.uid,
      email: userProfile.email,
      displayName: userProfile.displayName,
      role: userProfile.role,
      schoolName: userProfile.schoolName || 'SMA Negeri 1 Jakarta',
      targetPTN: userProfile.targetPTN || '',
      targetProdi: userProfile.targetProdi || '',
      xp: userProfile.xp || 100,
      level: userProfile.level || 1,
      streak: userProfile.streak || 1,
      isPremium: userProfile.isPremium || false,
      avatarUrl: userProfile.avatarUrl || '',
      updatedAt: new Date().toISOString()
    }, { merge: true });
  } catch (err) {
    console.warn('Firestore sync warning:', err);
  }
}

export async function getUserProfileFromFirestore(uid: string): Promise<UserProfile | null> {
  try {
    const userRef = doc(db, 'users', uid);
    const snap = await getDoc(userRef);
    if (snap.exists()) {
      return snap.data() as UserProfile;
    }
  } catch (err) {
    console.warn('Failed to fetch user from Firestore:', err);
  }
  return null;
}

export async function loginWithFirebaseEmail(
  email: string, 
  pass: string, 
  role: 'Siswa' | 'Guru' | 'Admin' = 'Siswa'
): Promise<UserProfile> {
  try {
    const credential = await signInWithEmailAndPassword(auth, email, pass);
    const fbUser = credential.user;
    
    let profile = await getUserProfileFromFirestore(fbUser.uid);
    if (!profile) {
      profile = {
        uid: fbUser.uid,
        email: fbUser.email || email,
        displayName: fbUser.displayName || email.split('@')[0],
        role: role,
        schoolName: 'SMA Negeri 1 Jakarta',
        targetPTN: '',
        targetProdi: '',
        xp: 100,
        level: 1,
        streak: 1,
        isPremium: role === 'Admin' || role === 'Guru',
        avatarUrl: fbUser.photoURL || `https://api.dicebear.com/7.x/adventurer/svg?seed=${fbUser.uid}`,
        createdAt: new Date().toISOString()
      };
      await syncUserProfileToFirestore(profile);
    }
    
    // Save to local simulator state for seamless cross-component compatibility
    localStorage.setItem('tka_current_user', JSON.stringify(profile));
    return profile;
  } catch (err: any) {
    // If user not found in firebase auth or auth failed, fall back to local simulator auth
    console.warn('Firebase email login error, falling back to local simulator:', err?.message);
    const profile = FirestoreSimulator.login(email, role, pass);
    syncUserProfileToFirestore(profile);
    return profile;
  }
}

export async function registerWithFirebaseEmail(
  email: string, 
  pass: string, 
  displayName: string, 
  role: 'Siswa' | 'Guru' | 'Admin' = 'Siswa'
): Promise<UserProfile> {
  try {
    const credential = await createUserWithEmailAndPassword(auth, email, pass);
    const fbUser = credential.user;

    const profile: UserProfile = {
      uid: fbUser.uid,
      email: fbUser.email || email,
      displayName: displayName || fbUser.displayName || email.split('@')[0],
      role: role,
      schoolName: 'SMA Negeri 1 Jakarta',
      targetPTN: '',
      targetProdi: '',
      xp: 100,
      level: 1,
      streak: 1,
      isPremium: role === 'Admin' || role === 'Guru',
      avatarUrl: fbUser.photoURL || `https://api.dicebear.com/7.x/adventurer/svg?seed=${fbUser.uid}`,
      createdAt: new Date().toISOString()
    };

    await syncUserProfileToFirestore(profile);
    localStorage.setItem('tka_current_user', JSON.stringify(profile));
    return profile;
  } catch (err: any) {
    console.warn('Firebase registration error, falling back to local simulator:', err?.message);
    const profile = FirestoreSimulator.register(email, displayName, role, pass);
    syncUserProfileToFirestore(profile);
    return profile;
  }
}

export async function loginWithGoogle(role: 'Siswa' | 'Guru' | 'Admin' = 'Siswa'): Promise<UserProfile> {
  const credential = await signInWithPopup(auth, googleProvider);
  const fbUser = credential.user;

  let profile = await getUserProfileFromFirestore(fbUser.uid);
  if (!profile) {
    profile = {
      uid: fbUser.uid,
      email: fbUser.email || '',
      displayName: fbUser.displayName || 'Pengguna Google',
      role: role,
      schoolName: 'SMA Negeri 1 Jakarta',
      targetPTN: '',
      targetProdi: '',
      xp: 150,
      level: 1,
      streak: 1,
      isPremium: role === 'Admin' || role === 'Guru',
      avatarUrl: fbUser.photoURL || `https://api.dicebear.com/7.x/adventurer/svg?seed=${fbUser.uid}`,
      createdAt: new Date().toISOString()
    };
    await syncUserProfileToFirestore(profile);
  }

  localStorage.setItem('tka_current_user', JSON.stringify(profile));
  return profile;
}

export async function logoutFirebase(): Promise<void> {
  try {
    await firebaseSignOut(auth);
  } catch (err) {
    console.warn('Firebase signOut error:', err);
  }
  FirestoreSimulator.logout();
}

export function subscribeAuthChange(onUserChanged: (user: UserProfile | null) => void) {
  return onAuthStateChanged(auth, async (fbUser: FirebaseUser | null) => {
    if (fbUser) {
      const profile = await getUserProfileFromFirestore(fbUser.uid);
      if (profile) {
        localStorage.setItem('tka_current_user', JSON.stringify(profile));
        onUserChanged(profile);
      }
    }
  });
}
