window.cipher = {
  encode: (word, offset) => {
      let newNumberAscii;//
      let newWord = "";
      for (let i = 0; i < word.length; i++) {
          word[i];
          const letter = word[i];
          const newPositionRealLetterTwo = (((letter.charCodeAt()) - 65) + offset) % 26;
          if (newPositionRealLetterTwo < 0) {
              newNumberAscii = newPositionRealLetterTwo + 26 + 65;
          }
          else {
              newNumberAscii = newPositionRealLetterTwo + 65;
          }
          const newLetter = String.fromCharCode(newNumberAscii);
          newWord += newLetter;
      }
      return newWord;

  },




  decode: (word, offset) => {
      let newNumberAscii;//
      let newWord = "";
      for (let i = 0; i < word.length; i++) {
          word[i];
          const letter = word[i];
          const newPositionRealLetterTwo = (((letter.charCodeAt()) - 65) - offset) % 26;
         
         if (newPositionRealLetterTwo < 0) {
              newNumberAscii = newPositionRealLetterTwo + 26 + 65;
          } else {
              newNumberAscii = newPositionRealLetterTwo + 65;
          }
          const newLetter = String.fromCharCode(newNumberAscii);
          newWord += newLetter;
      }
      return newWord;
  }
};