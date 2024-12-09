import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD-4yaElcSgwpEtRgf8X--IrCCmWQ2AUc0",
  authDomain: "signwithpractice.firebaseapp.com",
  projectId: "signwithpractice",
  storageBucket: "signwithpractice.appspot.com",
  messagingSenderId: "1060258575535",
  appId: "1:1060258575535:web:d6ff302f4387524b36505a",
  measurementId: "G-EHJH2EXPVL",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const signInWithGoogle = () => signInWithPopup(auth, provider);
const logout = () => signOut(auth);
export { auth, signInWithGoogle, logout };
