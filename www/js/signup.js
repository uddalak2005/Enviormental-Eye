// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import{getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyCivWPWpbVYiaOp2vsipB69xvWnDWu9l54",
    authDomain: "environmental-eye.firebaseapp.com",
    projectId: "environmental-eye",
    storageBucket: "environmental-eye.appspot.com",
    messagingSenderId: "556202710627",
    appId: "1:556202710627:web:afe518520b7d0aae398a56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// function showMessage(message, divId){
//     var messageDiv=document.getElementById(divId);
//     messageDiv.style.display="block";
//     messageDiv.innerHTML=message;
//     messageDiv.style.opacity=1;
//     setTimeout(function(){
//         messageDiv.style.opacity=0;
//     },5000);
// }
const signUp=document.getElementById('submitSignUp');
signUp.addEventListener('click', (event)=>{
    event.preventDefault();
    const email=document.getElementById('email').value;
    const password=document.getElementById('pass').value;
    const Name=document.getElementById('name').value;

    const auth=getAuth();
    const db=getFirestore();

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            const user=userCredential.user;
            const userData={
                email: email,
                Name: Name,
                password:password
            };
            alert('Account Created Successfully', 'signUpMessage');
            const docRef=doc(db, "users", user.uid);
            setDoc(docRef,userData)
                .then(()=>{
                    window.location.href='index.html';
                })
                .catch((error)=>{
                    console.error("error writing document", error);

                });
            window.location.href='homepage.html';
        })
        .catch((error)=>{
            const errorCode=error.code;
            if(errorCode==='auth/email-already-in-use'){
                alert('Email Address Already Exists !!!', 'signUpMessage');
            }
            else{
                alert('unable to create User', 'signUpMessage');
            }
        })
});

// const signIn=document.getElementById('submitSignIn');
// signIn.addEventListener('click', (event)=>{
//     event.preventDefault();
//     const email=document.getElementById('email').value;
//     const password=document.getElementById('password').value;
//     const auth=getAuth();
//
//     signInWithEmailAndPassword(auth, email,password)
//         .then((userCredential)=>{
//             showMessage('login is successful', 'signInMessage');
//             const user=userCredential.user;
//             localStorage.setItem('loggedInUserId', user.uid);
//             window.location.href='homepage.html';
//         })
//         .catch((error)=>{
//             const errorCode=error.code;
//             if(errorCode==='auth/invalid-credential'){
//                 showMessage('Incorrect Email or Password', 'signInMessage');
//             }
//             else{
//                 showMessage('Account does not Exist', 'signInMessage');
//             }
//         })
// })