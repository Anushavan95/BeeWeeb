import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAgbnkwKpaWXrCb5pmUCP6qXUkuIPDwk7M",
  authDomain: "beeweb-a1831.firebaseapp.com",
  projectId: "beeweb-a1831",
  storageBucket: "beeweb-a1831.appspot.com",
  messagingSenderId: "984710752459",
  appId: "1:984710752459:web:af4145ff36743c9ebc934e",
  measurementId: "G-D0BCTT8HTL",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
