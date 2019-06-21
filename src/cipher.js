window.cipher = {
  encode: (offset, string) => {
    let newNumberAscii;
    let newString = "";
    for (let i = 0; i < string.length; i++) {
			const letter = string[i];
			const newPositionRealLetterTwo = (((letter.charCodeAt()) - 65) + offset) % 26;
			if (newPositionRealLetterTwo < 0) {
				newNumberAscii = newPositionRealLetterTwo + 26 + 65;
			} else {
				newNumberAscii = newPositionRealLetterTwo + 65;
			}
			const newLetter = String.fromCharCode(newNumberAscii);
			newString += newLetter;
    }
    return newString;
  },
  decode: (offset, string) => {
      let newNumberAscii;//
      let newString = "";
      for (let i = 0; i < string.length; i++) {
          string[i];
          const letter = string[i];
          const newPositionRealLetterTwo = (((letter.charCodeAt()) - 65) - offset) % 26;
         
         if (newPositionRealLetterTwo < 0) {
              newNumberAscii = newPositionRealLetterTwo + 26 + 65;
          } else {
              newNumberAscii = newPositionRealLetterTwo + 65;
          }
          const newLetter = String.fromCharCode(newNumberAscii);
          newString += newLetter;
      }
      return newString;
  }
};

