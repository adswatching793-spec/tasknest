import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDzjMbnP8sqs3WxOaTWou5yZGHzBzET4us",
  authDomain: "tasknest-e58e3.firebaseapp.com",
  projectId: "tasknest-e58e3",
  storageBucket: "tasknest-e58e3.firebasestorage.app",
  messagingSenderId: "779816788050",
  appId: "1:779816788050:web:bce8e848653cacdee97f8b"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
