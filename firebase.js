import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA53ORM49_ecEyokNloQquC2XfCYwuUFfI",
  authDomain: "logspanelsuite.firebaseapp.com",
  projectId: "logspanelsuite",
  storageBucket: "logspanelsuite.firebasestorage.app",
  messagingSenderId: "927578504424",
  appId: "1:927578504424:web:bc2d8e9ea4e805ca669d5d",
  measurementId: "G-1N2G89RHD3"
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
