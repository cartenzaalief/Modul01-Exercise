const {
  rectangleArea,
  rectanglePerimeter,
  circleDiameter,
  circleCircumference,
  circleArea,
  thirdAngle,
  dateDiff,
  convertDays,
} = require("./Day01-Exercise-CartenzaAliefRasyad");

// 1.
test("Area of Rectangle", () => {
  expect(rectangleArea(20, 15)).toBe(300);
});

// 2.
test("Perimeter of Rectangle", () => {
  expect(rectanglePerimeter(20, 15)).toBe(70);
});

// 3.
test("Diameter of Circle", () => {
  expect(circleDiameter(10)).toBe(20);
});

test("Circumference of Circle", () => {
  expect(circleCircumference(10)).toBe(62.83185307179586);
});

test("Area of Circle", () => {
  expect(circleArea(10)).toBe(314.1592653589793);
});

// 4.
test("Angle of Triangle", () => {
  expect(thirdAngle(60, 30)).toBe(90);
});

// 5.
test("Date Difference", () => {
  expect(dateDiff(new Date("2022-11-1"), new Date("2022-11-12"))).toBe(
    "11"
  );
});

// 6.
test("Days Convert", () => {
  expect(convertDays(400)).toBe("400 days : 1 years, 1 months, 5 days");
});
