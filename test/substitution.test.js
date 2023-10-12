// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution() submission tests written by Thinkful", () => {
  describe("error handling", () => {
    it("if substitution alphabet is missing; return false", () => {
      const message = "message";
      const actual = substitution(message);
      expect(actual).to.be.false;
    });

    it("if function is not exactly 26 characters; return false", () => {
      const message = "message";
      const alphabet = "too short";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });

    it("if substitution alphabet does not contain unique characters; return false", () => {
      const message = "message";
      const alphabet = "xyzxyzxyzxyzxyzxyzxyzxyzxyz";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });
  });

  describe("encoding a message", () => {
    it("should encode a message using the substitution alphabet", () => {
      const message = "message";
      const alphabet = "qwertyuiopasdfghjklzxcvbnm";
      const actual = substitution(message, alphabet);
      const expected = "dtllqut";

      expect(actual).to.equal(expected);
    });

    it("should work with any kind of key with special characters", () => {
      const message = "message";
      const alphabet = ".;?,asdfghjklzxcvbnmqwerty";
      const actual = substitution(message, alphabet);
      const expected = "lann.da";

      expect(actual).to.equal(expected);
    });

    it("spaces should be preserved", () => {
      const message = "my message";
      const alphabet = ".;?,asdfghjklzxcvbnmqwerty";
      const actual = substitution(message, alphabet);
      const expected = "lt lann.da";

      expect(actual).to.equal(expected);
    });
  });

  describe("decoding a message", () => {
    it("should decode a message by using the substitution alphabet", () => {
      const message = "dtllqut";
      const alphabet = "qwertyuiopasdfghjklzxcvbnm";
      const actual = substitution(message, alphabet, false);
      const expected = "message";

      expect(actual).to.equal(expected);
    });

    it("should work with any kind of key with special characters", () => {
      const message = "lann.da";
      const alphabet = ".;?,asdfghjklzxcvbnmqwerty";
      const actual = substitution(message, alphabet, false);
      const expected = "message";

      expect(actual).to.equal(expected);
    });

    it("spaces should be preserved", () => {
      const message = "lt lann.da";
      const alphabet = ".;?,asdfghjklzxcvbnmqwerty";
      const actual = substitution(message, alphabet, false);
      const expected = "my message";

      expect(actual).to.equal(expected);
    });
  });
});

