const { expect } = require('chai');
const Calculator = require('../src/calculator');

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    describe('add()', () => {
        it('should add two numbers correctly', () => {
            expect(calculator.add(2, 3)).to.equal(5);
            expect(calculator.add(-1, 1)).to.equal(0);
            expect(calculator.add(0, 0)).to.equal(0);
        });
    });

    describe('subtract()', () => {
        it('should subtract two numbers correctly', () => {
            expect(calculator.subtract(5, 3)).to.equal(2);
            expect(calculator.subtract(1, 1)).to.equal(0);
            expect(calculator.subtract(0, 5)).to.equal(-5);
        });
    });

    describe('multiply()', () => {
        it('should multiply two numbers correctly', () => {
            expect(calculator.multiply(2, 3)).to.equal(6);
            expect(calculator.multiply(-2, 3)).to.equal(-6);
            expect(calculator.multiply(0, 5)).to.equal(0);
        });
    });

    describe('divide()', () => {
        it('should divide two numbers correctly', () => {
            expect(calculator.divide(6, 2)).to.equal(3);
            expect(calculator.divide(5, 2)).to.equal(2.5);
            expect(calculator.divide(0, 5)).to.equal(0);
        });

        it('should throw an error when dividing by zero', () => {
            expect(() => calculator.divide(5, 0)).to.throw('Division by zero is not allowed');
        });
    });
}); 