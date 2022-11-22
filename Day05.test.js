const {
  arrMin,
  arrMax,
  arrAvg,
  sortMin,
  sortMax,
  arrToString,
  wordArr,
  addition,
  arrAddition,
  arrNumAdd,
  evenOnly,
} = require("./Day05-Exercise-CartenzaAliefRasyad");

// 1.
test("Min value in array", () => {
  expect(arrMin([8, 20, 10, 5, 40, 25])).toBe(5);
});

test("Max value in array", () => {
  expect(arrMax([8, 20, 10, 5, 40, 25])).toBe(40);
});

test("Average value in array", () => {
  expect(arrAvg([8, 20, 10, 5, 40, 25])).toBe(18);
});

test("Min value with sort", () => {
  expect(sortMin([8, 20, 10, 5, 40, 25])).toBe(5);
});

test("Max value with sort", () => {
  expect(sortMax([8, 20, 10, 5, 40, 25])).toBe(40);
});

// 2.
test("Array to string", () => {
  expect(arrToString(["Car", "Motorcycle", "Bicycle", "Bus", "Truck"])).toBe(
    "Car, Motorcycle, Bicycle, Bus, and Truck"
  );
});

// 3.
test("Word separator", () => {
  expect(wordArr("Hello World", "lo")).toEqual(["Hel", " World"]);
});

// 4.
test("Array addition", () => {
  expect(arrAddition([1, 2, 3, 5], [3, 2, 1], addition)).toEqual([4, 4, 4, 5]);
});

// 5.
test("Array adds number without duplicate", () => {
  expect(arrNumAdd([1, 2, 3], 4)).toEqual([1, 2, 3, 4]);
});

// 6.
test("Remove odd numbers", () => {
  expect(evenOnly([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([2, 4, 6, 8, 10]);
});
