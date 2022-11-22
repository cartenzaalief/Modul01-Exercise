const {
  fahrenheitConvert,
  oddEven,
  primeNumber,
  sumNumber,
  factorialNumber,
  fibonacci,
} = require("./Day02-Exercise-CartenzaAliefRasyad");

// 1.
test("Convert to Fahrenheit", () => {
  expect(fahrenheitConvert(100)).toBe(212);
});

// 2.
test("Odd Even Number", () => {
  expect(oddEven(7)).toBe("Odd");
});

// 3.
test("Prime Number", () => {
  expect(primeNumber(23)).toBe("Prime Number");
});

// 4.
test("Sum Number", () => {
  expect(sumNumber(5)).toBe(15);
});

// 5.
test("Factorial Number", () => {
  expect(factorialNumber(5)).toBe(120);
});

// 6.
test("Fibonacci", () => {
  expect(fibonacci(5)).toBe(3);
});
