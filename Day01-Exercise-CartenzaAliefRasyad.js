//////////////////////////////////////////////////////////////////////////
// 1.

// Area of rectangle
let rectangleArea = (length, width) => {
  return length * width;
};

///////////////////////////////////////////////////////////////////////////
// 2.

// Perimeter of rectangle
let rectanglePerimeter = (length, width) => {
  return (length + width) * 2;
};

/////////////////////////////////////////////////////////////////////////
// 3.

// Diameter of circle
let circleDiameter = (radius) => {
  return radius * 2;
};

// Circumference of circle
let circleCircumference = (radius) => {
  return Math.PI * radius * 2;
};

// Area of Circle = PI * (radius)square
let circleArea = (radius) => {
  return Math.PI * Math.pow(radius, 2);
};

//////////////////////////////////////////////////////////////////////
// 4.

let thirdAngle = (angleA, angleB) => {
  return 180 - (angleA + angleB);
};

//////////////////////////////////////////////////////////////////////
// 5.

let dateDiff = (dateA, dateB) => {
  let dateResult = "";
  let diff = Math.floor((dateB - dateA) / (1000 * 60 * 60 * 24));
  dateResult += `${diff}`;

  return dateResult;
};

///////////////////////////////////////////////////////////////////////
// 6.

let convertDays = (days) => {
  let result = "";
  let years = Math.floor(days / 365);
  let daysLeft = days % 365;
  let months = Math.floor(daysLeft / 30);
  daysLeft = daysLeft % 30;

  result += `${days} days : ${years} years, ${months} months, ${daysLeft} days`;

  return result;
};

module.exports = {
  rectangleArea,
  rectanglePerimeter,
  circleDiameter,
  circleCircumference,
  circleArea,
  thirdAngle,
  dateDiff,
  convertDays,
};
