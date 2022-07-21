// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6iG0dVuKNJ1Qn9oo_yu8jwi68m5M53Xw",
  authDomain: "dts2022pandu.firebaseapp.com",
  projectId: "dts2022pandu",
  storageBucket: "dts2022pandu.appspot.com",
  messagingSenderId: "187010059450",
  appId: "1:187010059450:web:8692ba5b800b54a4530683",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const userRegister = async (email, password) => {
  try {
    const userResponse = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log("user teregister ", userResponse.user);
  } catch (err) {
    console.log("error ", err.code);
    console.log(err.message);
  }
};

const userLogin = async (email, password) => {
  try {
    const responseLogin = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log("User berhasil login : ", responseLogin.user);
    Swal.fire({
      title: "Berhasil",
      text: "Login berhasil",
      icon: "success",
    });
  } catch (err) {
    Swal.fire({
      title: "Error!",
      text: "Email atau Password Salah !!",
      icon: "error",
    });
    // console.log("error ", err.code);
    // console.log(err);
  }
};

const userForgetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (err) {
    console.log("error ", err.code);
    console.log(err.message);
  }
};

const userLogout = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.log("error ", err.code);
    console.log(err.message);
  }
};

export { auth, userRegister, userLogin, userForgetPassword, userLogout };
