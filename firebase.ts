
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAzFIhJqIjrhkVZvlFroABCl0zVtN9KFr4",
  authDomain: "twitter-8bfe0.firebaseapp.com",
  projectId: "twitter-8bfe0",
  storageBucket: "twitter-8bfe0.appspot.com",
  messagingSenderId: "245292609085",
  appId: "1:245292609085:web:8eb98c6ad7d7902dda0454"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
