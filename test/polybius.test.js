const { expect } = require('chai');
const { polybius } = require('../src/polybius'); 

describe('polybius()', () => {
  describe('Encoding', () => {
    it('should encode a message by translating each letter to number pairs', () => {
      const encodedMessage = polybius('thinkful');
      expect(encodedMessage).to.equal('4432423352125413');
    });

    it('should translate both "i" and "j" to 42', () => {
      const encodedMessage = polybius('ij');
      expect(encodedMessage).to.equal('4242');
    });

    it('should leave spaces as is', () => {
      const encodedMessage = polybius('Hello world');
      expect(encodedMessage).to.equal('3251131343 2543241341');
    });
  });

  describe('Decoding', () => {
    it('should decode a message by translating each pair of numbers into a letter', () => {
      const decodedMessage = polybius('4432423352125413', false);
      expect(decodedMessage).to.equal('th(i/j)nkful');
    });

    it('should translate "(i/j)" to "i/j" during decoding', () => {
        const message = "jiggle";
        const actual = polybius(message);
        console.log(actual);
        const expected = "424222221351";
  
        expect(actual).to.equal(expected);
      });
    

    it('should leave spaces as is during decoding', () => {
      const decodedMessage = polybius('3251131343 2543241341', false);
      expect(decodedMessage).to.equal('hello world');
    });

    it('should return false if the length of numbers is odd during decoding', () => {
      const decodedMessage = polybius('44324233521254134', false);
      expect(decodedMessage).to.equal(false);
    });
  });
});




