window.cipher = {
  encode: (word, offset) => {
    let newNumberAscii; //
    let newWord = "";
    for (let i = 0; i < word.length; i++) {
      word[i];
      const letter = word[i];
      const newPositionRealLetter = (((letter.charCodeAt()) - 65) + offset) % 26;
      if (newPositionRealLetter < 0) {
        newNumberAscii = newPositionRealLetter + 26 + 65;
      } else {
        newNumberAscii = newPositionRealLetter + 65;
      }
      const newLetter = String.fromCharCode(newNumberAscii);
      newWord += newLetter;
    }
    return newWord
  },
  decode: (offset, string) => {
    /* Acá va tu código que descifra*/
  }
};
