const firstScreen= document.getElementById("first-screen");
const loginScreen=document.getElementById("login-screen");


const signUpScreen= document.getElementById("sign-up-screen");
const messageScreen= document.getElementById("message-screen");


loginScreen.classList.add('hide');
signUpScreen.classList.add('hide');
messageScreen.classList.add('hide');


const buttonLogin= document.getElementById("login-button");
buttonLogin.addEventListener('click',()=>{
firstScreen.classList.add('hide');
loginScreen.classList.remove('hide') ;
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
document.getElementById("password").value = '';
if(userPasswordValue=="LABORATORIA"){
 loginScreen.classList.add('hide');
 messageScreen.classList.remove("hide");
}else { // si no es igual a LABORATORIA
if (contador === 1 || contador === 2) {
  alert('Contraseña incorrecta, vuelve a intentarlo');
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
// console.log(secretValue);
const offsetValue= parseInt(offset.value);
// console.log(offsetValue); 
const textoCifrado=cipher.encode(secretValue,offsetValue);
// console.log(textoCifrado)
// console.log(cipher.encode(secretValue,offsetValue));
messagetextresultDiv.innerHTML= textoCifrado;
document.getElementById("secret-text").value="";
document.getElementById("offset").value="";
})

decodeBtn.addEventListener('click',()=>{
  const secretValue= secretText.value;
 //  console.log(secretValue);
const offsetValue=  parseInt(offset.value);
 // console.log(offsetValue);
const textoDescifrado=cipher.decode(secretValue,offsetValue);
// console.log(textoDescifrado);
messagetextresultDiv.innerHTML=textoDescifrado;
document.getElementById("offset").value = '';
document.getElementById("secret-text").value = '';
})





























































