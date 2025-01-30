const chai = require('chai');

const expect = chai.expect;

const userRegistration = require('../userRegistration');


describe('User Registration Module', function () {


it('should register a user with valid username and password', function () {

const result = userRegistration.registerUser('john_doe', 'securePassword123');

expect(result).to.equal('User john_doe successfully registered!');

});


it('should return error when username is empty', function () {

const result = userRegistration.registerUser('', 'validPassword');

expect(result).to.equal('Error: Both username and password are required.');

});


it('should return error when password is empty', function () {

const result = userRegistration.registerUser('john_doe', '');

expect(result).to.equal('Error: Both username and password are required.');

});


it('should return error when both username and password are empty', function () {

const result = userRegistration.registerUser('', '');

expect(result).to.equal('Error: Both username and password are required.');

});


it('should register a user with special characters in username', function () {

const result = userRegistration.registerUser('john!@#', 'securePassword123');

expect(result).to.equal('User john!@# successfully registered!');

});

});

