// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    let x = shift 
    if(!x || x < -25  || x > 25) {
      return false; 
    }
    // define the aphabet for wrapping 
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    // create func to handle encoding/decoding a single character
    function shiftChar(character) {
      // convert to lowerCase 
      character = character.toLowerCase();
      // ignore non-alphabetic characters
      if(!/[a-z]/.test(character)) {
        return character;
      }
      const index = alphabet.indexOf(character);
      let shiftedIndex; 

      if(encode) {
        // apply positive shift 
        shiftedIndex = (index + shift) % 26; 
       if(shiftedIndex < 0) {
          // wrap around for neg shift 
          shiftedIndex += 26; 
        }
    } else {
      // appply neg shift 
      shiftedIndex = (index - shift) % 26;
      if(shiftedIndex < 0) {
        // wrap around for neg shift 
        shiftedIndex += 26;
      }
    }
    const shiftedCharacter = alphabet.charAt(shiftedIndex);
    return shiftedCharacter;
   }

   // apply shift to each character in the input string 
   const result = input.split('').map(shiftChar).join('');
   return result; 
  };
  // export caesar func
  return { caesar };
})();

module.exports = { caesar: caesarModule.caesar };
