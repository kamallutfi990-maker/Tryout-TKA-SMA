import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics, isSupported as isAnalyticsSupported, Analytics } from 'firebase/analytics';
import { getRemoteConfig, fetchAndActivate, getValue, RemoteConfig } from 'firebase/remote-config';
import firebaseAppletConfig from '../../firebase-applet-config.json';

export const firebaseConfig = {
  apiKey: "AIzaSyAA2dn5uHLs4O4EALUjygTgpW9iwHzHDxo",
  authDomain: "try-out-tka-dan-utbk.firebaseapp.com",
  projectId: "try-out-tka-dan-utbk",
  storageBucket: "try-out-tka-dan-utbk.firebasestorage.app",
  messagingSenderId: "850767758071",
  appId: "1:850767758071:web:1f3593737c9913f54209f2",
  measurementId: "G-47XVQ3SP60"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = firebaseAppletConfig.firestoreDatabaseId && firebaseAppletConfig.firestoreDatabaseId !== '(default)'
  ? getFirestore(app, firebaseAppletConfig.firestoreDatabaseId)
  : getFirestore(app);

export const storage = getStorage(app);

let analytics: Analytics | null = null;
if (typeof window !== 'undefined') {
  isAnalyticsSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  }).catch(() => {});
}
export { analytics };

export let remoteConfig: RemoteConfig | null = null;
if (typeof window !== 'undefined') {
  try {
    remoteConfig = getRemoteConfig(app);
    remoteConfig.settings.minimumFetchIntervalMillis = 3600000;
  } catch (e) {
    console.warn('Remote config initialization deferred:', e);
  }
}

export { fetchAndActivate, getValue };
export default app;

