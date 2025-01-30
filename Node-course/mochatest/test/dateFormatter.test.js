const chai = require('chai');

const expect = chai.expect;

const dateFormatter = require('../dateFormatter');


describe('Date Formatter Module', function () {


it('should format a valid date correctly', function () {

const result = dateFormatter.formatDate(new Date("2025-01-28"));

expect(result).to.equal('2025-01-28');

});


it('should format a valid date in different formats correctly', function () {

const result1 = dateFormatter.formatDate(new Date("2025/01/28"));

const result2 = dateFormatter.formatDate(new Date("January 28, 2025"));

expect(result1).to.equal('2025-01-28');

expect(result2).to.equal('2025-01-28');

});


it('should return an error for an invalid date', function () {

const result = dateFormatter.formatDate(new Date("invalid-date"));

expect(result).to.equal('Error: Invalid date.');

});


it('should format the current date correctly', function () {

const result = dateFormatter.formatDate(new Date());

const currentDate = new Date();

const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;

expect(result).to.equal(formattedDate);

});

});

