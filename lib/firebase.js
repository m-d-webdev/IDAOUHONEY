// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const apiKey = process.env.NEXT_PUBLIC_APIKEY;

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey,
    authDomain: "tamnt-7b078.firebaseapp.com",
    projectId: "tamnt-7b078",
    storageBucket: "tamnt-7b078.firebasestorage.app",
    messagingSenderId: "944083817469",
    appId: "1:944083817469:web:e7375e23b045caf86cbf94"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const Google_Provider = new GoogleAuthProvider()

export const LoginWithGoogle = () => {
console.log(apiKey);

    return new Promise(
        async (resolve, reject) => {
            try {
                return signInWithPopup(auth, Google_Provider)
                    .then((res) => resolve(res.user))
                    .catch((error) => reject())

                    ;
            } catch (error) {
                return reject({ message: error.message });
            }
        }
    );
};