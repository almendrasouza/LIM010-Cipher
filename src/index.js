/* Acá va tu código */
const firstSreen = document.getElementById("first-screen");
const loginScreen = document.getElementById("login-screen");
const signUpScreen = document.getElementById("sign-up-screen");
const confessionScreen = document.getElementById("confession-screen");


 loginScreen.style.display = "none";
 signUpScreen.style.display= "none";
 confessionScreen.style.display ="none";

 const loginButton = document.getElementById("login-button");
 loginButton.addEventListener('click',()=>{
 
    firstSreen.style.display= "none";
    loginScreen.style.display ="block";

 });

const signUpButton = document.getElementById("sign-up-button");
signUpButton.addEventListener('click',()=>{

    firstSreen.style.display= "none";
    signUpScreen.style.display= "block";
});


const signInButton = document.getElementById("btn-login");
contador=0;
signInButton.addEventListener('click',()=>{
contador++
const userName = document.getElementById("username");
const passwordSignIn = document.getElementById("password-sign-in");
const userNameValue=userName.value;
document.getElementById("username").value='';
console.log(userNameValue);
 const passwordValue= passwordSignIn.value;
 document.getElementById("password-sign-in").value='';
 console.log(passwordValue);
 if(passwordValue === "LABORATORIA"){
    loginScreen.style.display ="none";
confessionScreen.style.display= "block";

 }else{ // si no es igual a LABORATORIA
     if(contador===1 || contador ===2){
         alert('Contraseña incorrecta, vuelve a intentarlo')

     }else  if(contador ===3){
        alert('Acceso denegado')
     }
     


 }
 
});