const chai = require('chai');

const expect = chai.expect;

const palindromeChecker = require('../palindromeChecker');


describe('Palindrome Checker Module', function () {


it('should return true for a valid palindrome string', function () {

const result = palindromeChecker.checkPalindrome('racecar');

expect(result).to.be.true;

});


it('should return false for a non-palindrome string', function () {

const result = palindromeChecker.checkPalindrome('hello');

expect(result).to.be.false;

});


it('should return true for an empty string', function () {

const result = palindromeChecker.checkPalindrome('');

expect(result).to.be.true;

});


it('should return true for a string with spaces and is still a palindrome', function () {

const result = palindromeChecker.checkPalindrome('a man a plan a canal panama');

expect(result).to.be.true;

});


it('should return true for a string with punctuation and is still a palindrome', function () {

const result = palindromeChecker.checkPalindrome('Madam, in Eden, I\'m Adam!');

expect(result).to.be.true;

});

});
