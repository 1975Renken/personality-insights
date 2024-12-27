import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyDDe8Up5smJmX4hAsBkJHe90-Ww3FGDkPA",
  authDomain: "personality-insights-41d51.firebaseapp.com",
  projectId: "personality-insights-41d51",
  storageBucket: "personality-insights-41d51.firebasestorage.app",
  messagingSenderId: "180655743154",
  appId: "1:180655743154:web:6cf73ee26348d7679029ab",
  measurementId: "G-LK3GR5L4HC"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);

export default app;