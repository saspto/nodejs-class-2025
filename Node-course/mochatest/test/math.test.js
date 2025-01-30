const chai = require('chai');
const expect = chai.expect;
const math = require('../math');

describe('Math Module', function(){
	describe('add()', function(){
		it('will add 2 number',function(){
			const result = math.add(2,3);
			expect(result).to.equal(5);
	});
});
	describe('subtract()', function(){
		it('will subtract 2 number',function(){
			const result = math.subtract(5,2);
			expect(result).to.equal(3);
	});
});
});