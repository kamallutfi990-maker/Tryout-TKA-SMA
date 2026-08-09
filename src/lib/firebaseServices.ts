import { 
  collection, 
  doc, 
  setDoc, 
  getDoc, 
  getDocs, 
  query, 
  orderBy, 
  limit, 
  serverTimestamp 
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { logEvent } from 'firebase/analytics';
import { db, storage, analytics } from './firebase';

// ==========================================
// 1. FIRESTORE DATABASE SERVICES
// ==========================================

export interface TryoutResultData {
  userId: string;
  userName: string;
  subtest: string;
  score: number;
  accuracy: number;
  totalQuestions: number;
  correctCount: number;
  durationSeconds: number;
  timestamp?: any;
}

export async function saveTryoutResultToFirestore(data: TryoutResultData): Promise<void> {
  try {
    const docRef = doc(collection(db, 'tryout_results'));
    await setDoc(docRef, {
      ...data,
      timestamp: serverTimestamp(),
      createdAt: new Date().toISOString()
    });

    logFirebaseEvent('tryout_completed', {
      subtest: data.subtest,
      score: data.score
    });
  } catch (err) {
    console.warn('Firestore tryout_results save error:', err);
  }
}

export async function saveReportCardToFirestore(userId: string, reportCardData: any): Promise<void> {
  try {
    const docRef = doc(db, 'report_cards', userId);
    await setDoc(docRef, {
      userId,
      subjects: reportCardData,
      updatedAt: serverTimestamp()
    }, { merge: true });

    logFirebaseEvent('report_card_saved', { userId });
  } catch (err) {
    console.warn('Firestore report_cards save error:', err);
  }
}

export async function getReportCardFromFirestore(userId: string): Promise<any | null> {
  try {
    const docRef = doc(db, 'report_cards', userId);
    const snap = await getDoc(docRef);
    if (snap.exists()) {
      return snap.data().subjects || null;
    }
  } catch (err) {
    console.warn('Firestore report_cards fetch error:', err);
  }
  return null;
}

export async function getTopLeaderboardFromFirestore(limitCount: number = 10): Promise<any[]> {
  try {
    const q = query(
      collection(db, 'tryout_results'), 
      orderBy('score', 'desc'), 
      limit(limitCount)
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (err) {
    console.warn('Firestore leaderboard query error:', err);
    return [];
  }
}

// ==========================================
// 2. FIREBASE CLOUD STORAGE SERVICES
// ==========================================

export async function uploadFileToStorage(
  file: File, 
  pathFolder: 'avatars' | 'documents' | 'assignments',
  userId: string
): Promise<string> {
  try {
    const fileExtension = file.name.split('.').pop() || 'png';
    const filePath = `${pathFolder}/${userId}_${Date.now()}.${fileExtension}`;
    const storageRef = ref(storage, filePath);
    
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);

    logFirebaseEvent('file_uploaded', {
      folder: pathFolder,
      fileType: file.type
    });

    return downloadURL;
  } catch (err) {
    console.warn('Cloud Storage upload error:', err);
    throw new Error('Gagal mengunggah berkas ke Firebase Cloud Storage');
  }
}

// ==========================================
// 3. FIREBASE ANALYTICS SERVICE
// ==========================================

export function logFirebaseEvent(eventName: string, eventParams?: Record<string, any>): void {
  try {
    if (analytics) {
      logEvent(analytics, eventName, eventParams);
    }
  } catch (err) {
    console.warn('Analytics logEvent warning:', err);
  }
}

// ==========================================
// 4. FIREBASE CLOUD MESSAGING (FCM) PERMISSION
// ==========================================

export async function requestFcmPushPermission(): Promise<string | null> {
  if (typeof window === 'undefined' || !('Notification' in window)) {
    return null;
  }

  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      logFirebaseEvent('push_notifications_enabled');
      return 'granted';
    }
  } catch (err) {
    console.warn('Notification permission error:', err);
  }
  return null;
}
