var mathlib = require('./mathlib')();     //notice the extra invocation parentheses!
console.log(mathlib);
mathlib.add(10,15);
mathlib.multiply(7,5);
mathlib.square(4);
mathlib.random(1,25);
