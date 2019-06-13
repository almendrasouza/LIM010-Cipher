
window.cipher = {
  encode: (offset, string) => {
    /* Acá va tu código que cifra*/
  },
  decode: (offset, string) => {
    /* Acá va tu código que descifra*/
  }
};
 
//aprendiendo a cifrar una letra
const encodeLetter=(letter,offset)=>{
 const numeroAscii= letter.charCodeAt() ; //retornar a un numero ascii   
 const nuevoNumeroAscii = numeroAscii + offset ; //retornar  el nuevo numero Ascii
 const newLetter= String.fromCharCode(nuevoNumeroAscii);
// console.log(newLetter);
 return newLetter;
};


encodeLetter("A",1);

const encodeWord=(word,offset)=>{
 let newWord="";
for(i=0;i<word.lenght;i++){
  const letter= word[i] // H
 
  const numeroAscii= letter.charCodeAt() ; //retornar a un numero ascii   
  const nuevoNumeroAscii = numeroAscii + offset ; //retornar  el nuevo numero Ascii
  const newLetter= String.fromCharCode(nuevoNumeroAscii);
 // console.log(newLetter); // I 
newWord+=newLetter; // newWord= newWord + newLetter
}


  return newWord;
 };
 encodeWord("HOLA",1);
const arr= [0,1,2];
arr [1];