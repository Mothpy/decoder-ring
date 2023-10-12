const chai = require('chai');
const expect = chai.expect;
const { caesar } = require('../src/caesar');

describe('caesar function', () => {
    it('should encode a message with a positive shift', () => {
        const input = 'hello';
        const shift = 3;
        const expected = 'khoor';
        const result = caesar(input, shift);
        expect(result).to.equal(expected);
    });
    it('should decode a message with a negative shift', () => {
        const input = 'khoor';
        const shift = 3;
        const expected = 'hello';
        const result = caesar(input, shift, false);
        expect(result).to.equal(expected);
    });
    it('should handle wrapping around the alphabet', () => {
        const input = 'xyz';
        const shift = 3;
        const expected = 'abc';
        const result = caesar(input, shift);
        expect(result).to.equal(expected);
    });
    it('should maintain non-alphabetic characters', () => {
        const input = 'hello, world';
        const shift = 3;
        const expected = 'khoor, zruog';
        const result = caesar(input, shift);
        expect(result).to.equal(expected);
    });
    it('should return false for invalid shift values', () => {
        const input = 'hello';
        const invalidShift = 30;
        const result = caesar(input, invalidShift);
        expect(result).to.equal(false);
    });
});
