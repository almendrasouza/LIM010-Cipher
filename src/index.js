const signInButton = document.getElementById("btn-login1");
let contador = 0;
signInButton.addEventListener('click',() =>{
  contador++
  const userName = document.getElementById("username");
  const passwordSignIn = document.getElementById("password-sign-in");
  const userNameValue = userName.value;
  document.getElementById("username").value = '';
  console.log(userNameValue);
  const passwordValue = passwordSignIn.value;
  document.getElementById("password-sign-in").value = '';
  console.log(passwordValue);
  if (passwordValue === "LABORATORIA") {
  //..................//
   
  } else { // si no es igual a LABORATORIA
    if (contador === 1 || contador === 2) {
      alert('Contraseña incorrecta, vuelve a intentarlo')

    } else if (contador === 3) {
      alert('Acceso denegado')
    }



  }

});

const secretTextUser=document.getElementById("secret-text");
const offsetUser=document.getElementById("offset-user");
const encodeBtn=document.getElementById("encode-btn");
const  encodedTextResultDiv=document.getElementById("encode-text-result");
encodeBtn.addEventListener('click',()=>{
const secretValue=secretTextUser.value;
const offsetValue=offsetUser.value;
const newText=cipher.encode(secretValue,offsetValue);
encodedTextResultDiv.innerHTML=newText
})

















const encodeword=(word,offset)=>{
  let newWord="";// caja vacia donde vas a guardar cada letra ,para concantenar  (unir cada letra para formar palabra)
for(let  i=0; i<word.length;i++){
   
 // word[i]; obteniendo cada letra
 const letter= word[i];
 

letter.charCodeAt();// convertido a un numero ascii
const numberascii= letter.charCodeAt();
 numberascii+offset;//  obteniendo el nuevo numero asci

 const newnumberascii= numberascii + offset;

String.fromCharCode(newnumberascii);// convertido a una nueva letra
const newletter= String.fromCharCode(newnumberascii);// I
newWord+=newletter; // newWord=newWord+newLetter; /7 concatenando cada letra para formar el mensaje

}

return newWord;

};
//Probando la funcion
// encodeword();//invocando a la funcion. prendiendo a la maquina
encodeword('HOLA',6);// retornara una nueva palabra NURG
console.log(encodeword('HOLA',6));




//obten el numero ascii de cada letra  (que aparezca en la consola) 

// A
// B
// C
// D
// E
// F
// G
// a 
// b 
// c 
// d
// e 
// f
// g
// h
// i 
// j
// k 


// obten una caracter a partir de un numero ascii

//65
// 90
// 89
//70
//67
//64
//62
//61
//66
//67
//68
//69
//63
//71
//72
//73
//74
//75