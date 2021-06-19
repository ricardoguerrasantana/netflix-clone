import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';


const config = {
  apiKey: "AIzaSyCEuCE9oY-jtkFEdPzx4dDCIAnaVv6jM6w",
  authDomain: "netflix-clone-7592b.firebaseapp.com",
  projectId: "netflix-clone-7592b",
  storageBucket: "netflix-clone-7592b.appspot.com",
  messagingSenderId: "868063097771",
  appId: "1:868063097771:web:d6b3a59ea34f4d8fcbd8ee"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };