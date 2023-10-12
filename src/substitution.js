// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length != 26) {
      return false;
    }
    let alphabet_set = new Set(alphabet);
    if (alphabet_set.size != 26) {
      return false;
    }
    let output = "";
    if (encode) {
      for (let i = 0; i < input.length;i++) {
        let letter = input[i];
        let idx = alpha.indexOf(letter); 
        if (idx == -1) {
          output += letter;
        } else {
          output += alphabet[idx];
        }
      }
    } else {
      // decode 
      for (let i = 0; i < input.length; i++) {
        let letter = input[i];
        let idx = alphabet.indexOf(letter);
        if (idx == -1) {
          output += letter;
        } else {
          output += alpha[idx];
        }
      }
    }
    return output;
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

