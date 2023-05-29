
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";



function startFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyCJwuO8gYaWULXmvWQzmmYwNJmIF2kzlLQ",
    authDomain: "healthvisor-60926.firebaseapp.com",
    databaseURL: "https://healthvisor-60926-default-rtdb.firebaseio.com",
    projectId: "healthvisor-60926",
    storageBucket: "healthvisor-60926.appspot.com",
    messagingSenderId: "538723762479",
    appId: "1:538723762479:web:aa11198fe660a971e3e1da",
    measurementId: "G-211PVEB14Y"
  };
  
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  return getDatabase(app);
}

export default startFirebase

