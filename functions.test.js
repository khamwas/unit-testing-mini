const functions = require('./functions');

test('returnTwo() should return 2', () => {
	expect(functions.returnTwo()).toEqual(2);
});

test('expect greeting(James) to return hello, James and greeting(Jill) to return hello Jill', () => {
	expect(functions.greeting('James')).toEqual('Hello, James.');
	expect(functions.greeting('Jill')).toEqual('Hello, Jill.');
});

describe('Math functions', () => {
	test('expect add(1,2) to equal 3 and add(5,9) to equal 14', () => {
		expect(functions.add(1, 2)).toEqual(3);
		expect(functions.add(5, 9)).toEqual(14);
	});
	test('expect subtract(a,b) to programatically return the correct value', () => {
		expect(functions.subtract(5, 2)).toEqual(3);
		expect(functions.subtract(12, 9)).toEqual(3);
	});
	test('expect multiply(a,b) to programatically return the correct value', () => {
		expect(functions.multiply(5, 2)).toEqual(10);
		expect(functions.multiply(5, 9)).toEqual(45);
	});
	test('expect divide(a,b) to programatically return the correct value', () => {
		expect(functions.divide(10, 2)).toEqual(5);
		expect(functions.divide(5, 5)).toEqual(1);
	});
});
