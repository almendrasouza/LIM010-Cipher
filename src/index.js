const firstScreen= document.getElementById("first-screen");
const loginScreen=document.getElementById("login-screen");


const signUpScreen= document.getElementById("sign-up-screen");
const messageScreen= document.getElementById("message-screen");

loginScreen.style.display="none";
signUpScreen.style.display="none";
messageScreen.style.display="none";
const buttonLogin= document.getElementById("login-button");
buttonLogin.addEventListener('click',()=>{
firstScreen.style.display= "none";
loginScreen.style.display="block";
})



const buttonLogin2= document.getElementById("btn-login");

const userPassword = document.getElementById("password");
let contador=0;
buttonLogin2.addEventListener('click',()=>{
 contador++

const userPasswordValue = userPassword.value;
// console.log(userNameValue);
//console.log(userPasswordValue);
document.getElementById("username").value = '';
document.getElementById("password").value = ''

if(userPasswordValue=="LABORATORIA"){
 loginScreen.style.display="none";
 messageScreen.style.display="block";
 
}else { // si no es igual a LABORATORIA
if (contador === 1 || contador === 2) {
  alert('Contraseña incorrecta, vuelve a intentarlo')

} else if (contador === 3) {// si no es igual a LABORATORIA entonces sale
  alert('Acceso denegado')
}
}

})

const encodeBtn= document.getElementById("encode-btn");
const decodeBtn= document.getElementById("decode-btn");
const messagetextresultDiv= document.getElementById("encoded-text-result");
const secretText= document.getElementById("secret-text");
const offset= document.getElementById("offset");
encodeBtn.addEventListener('click',()=>{

const secretValue= secretText.value;
const offsetValue= parseInt(offset.value);

const textoCifrado= cipher.encode(secretValue,offsetValue);
messagetextresultDiv.innerHTML= textoCifrado;
document.getElementById("offset").value = '';

})
decodeBtn.addEventListener('click',()=>{
  const  contenidoTextoCifrado=messagetextresultDiv.textContent;
const offsetValue=  parseInt(offset.value);
const textoDescifrado=cipher.decode(contenidoTextoCifrado,offsetValue);
messagetextresultDiv.innerHTML=textoDescifrado;
})































































