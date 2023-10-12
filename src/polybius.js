// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  function polybius(input, encode = true) {
    const polybiusSquare = {
      a: '11', b: '21', c: '31', d: '41', e: '51',
      f: '12', g: '22', h: '32', i: '42', j: '42',
      k: '52', l: '13', m: '23', n: '33', o: '43',
      p: '53', q: '14', r: '24', s: '34', t: '44',
      u: '54', v: '15', w: '25', x: '35', y: '45', z: '55',
    };

    // If encode is true, perform encoding.
    if (encode) {
      // Convert the input to lowercase for consistent handling.
      const lowercaseInput = input.toLowerCase();
      let encodedMessage = '';

      // Loop through each character in the input.
      for (let char of lowercaseInput) {
        if (char === ' ') {
          // Maintain spaces in the string.
          encodedMessage += ' ';
        } else {
          // Convert the letter to its Polybius coordinates and append to the result.
          encodedMessage += polybiusSquare[char];
        }
      }
      return encodedMessage; // Return the encoded message.
    
    } else {
      // If encode is false, perform decoding.
      let result = '';
      let i = 0;
      let numCount = 0; // initialize a counter for numbers 
      let message = input.toLowerCase().split('');
      let messageNoSpaces = message.filter((char => char !== ' '));
    
    if (messageNoSpaces.length % 2 !== 0) {
    return false; // output false
      }                                
    
     while (i < input.length) {
      if(input[i] === ' ') {
        // preserve spaces in the string 
        result += ' ';
        i++
      } else {
        // map pair of nums back to a letter and append to result 
        const pair = input.slice(i, i + 2);
        if(pair === '42') {
          // handle I/J as 42 
          result += '(i/j)';
        } else {
          for (let letter in polybiusSquare) {
            if(polybiusSquare[letter] === pair) {
              result += letter;
              break;
            }
          }
        }
        i += 2;
        numCount += 2; // // Increment the number counter by 2 for each pair
      }
     }
      // Check if the number of characters (excluding spaces) is even
      if (numCount % 2 !== 0) {
        return false;
      }
     return result;
    }
  }

return { polybius };
})();

module.exports = { polybius: polybiusModule.polybius };



