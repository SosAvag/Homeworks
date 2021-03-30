const Calculator = require('../../app/calculator.js');
const chai = require('chai');
const spies = require('chai-spies');
const { expect } = require('chai');
chai.use(spies);

describe('add', function() {
    let calc, spy;

    beforeEach(() => {
        calc = new Calculator();
        spy = chai.spy.on(calc, 'add');
    });

    afterEach(() => {
        calc = null;
    });

    it('should return 17 when called with numbers 2,5,10', function() {
        expect(calc.add(2,5,10)).to.be.equal(17);
    });

    it('should return 0 when called without arguments', function() {
        expect(calc.add()).to.be.equal(0);
    });

    it('should return an error if provided with an invalid argument', function() {
        
        expect( calc.add(5,'5',5)).to.be.equal(`There is invalid argument`);
    });
    });

    describe('multiply', function() {
        let calc, spy;
    
        beforeEach(() => {
            calc = new Calculator();
            spy = chai.spy.on(calc, 'multiply');
        });
    
        afterEach(() => {
            calc = null;
        });
    
        it('should return 80 when called with numbers 2,5,8', function() {
            expect(calc.multiply(2,5,8)).to.be.equal(80);
        });
    
        it('should return 0 when  one of arguments equal 0', function() {
            expect(calc.multiply(2,0,80)).to.be.equal(0);
        });
    
        it('should return 0 when called whitout arguments', function() {
            expect(calc.multiply()).to.be.equal(0);
        });
        
        it('should return an error if provided with an invalid argument', function() {
            
            expect( calc.multiply(5,'5',5)).to.be.equal(`There is invalid argument`);
        });
    });