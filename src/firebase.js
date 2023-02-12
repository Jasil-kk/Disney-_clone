import "firebase/compat/firestore";
import { getAuth , GoogleAuthProvider , signInWithPopup} from "firebase/auth";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD3t-1VZ3gJv29VhItu2tfF_QhAgbsQiHc",
  authDomain: "disney-66e86.firebaseapp.com",
  projectId: "disney-66e86",
  storageBucket: "disney-66e86.appspot.com",
  messagingSenderId: "621896495697",
  appId: "1:621896495697:web:ee7ef8023cf7ec7ea73e70",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


const provider =new GoogleAuthProvider();
export const signInWithGoogle = () =>{
  signInWithPopup(auth,provider).then((app) =>{
    console.log(result);
  }).catch((error) => {
    console.log(error);
  })
};
