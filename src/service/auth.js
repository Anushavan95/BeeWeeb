import firebase from "../config/firebase-config";
const socialAuth = (provider) => {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        resolve(res.user);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default socialAuth;
