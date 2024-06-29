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


const signIn=document.getElementById("submitSignIn");
signIn.addEventListener('click', (event)=>{
    event.preventDefault();
    const email=document.getElementById('email').value;
    const password=document.getElementById('pass').value;
    const auth=getAuth();

    signInWithEmailAndPassword(auth, email,password)
        .then((userCredential)=>{
            alert('login is successful', 'signInMessage');
            const user=userCredential.user;
            localStorage.setItem('loggedInUserId', user.uid);
            window.location.href='homepage.html';
        })
        .catch((error)=>{
            const errorCode=error.code;
            if(errorCode==='auth/invalid-credential'){
                alert('Incorrect Email or Password', 'signInMessage');
            }
            else{
                alert('Account does not Exist', 'signInMessage');
            }
        })
})