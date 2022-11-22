///////////////////////////////////////////////////////
// 1.

let heightTriangle = 4;

function tri(h) {
  let triangle = "";
  let count = 1;

  for (let i = 1; i <= h; i++) {
    for (let j = 1; j <= i; j++) {
      if (count < 10) {
        triangle += `0${count} `;
        count++;
      } else {
        triangle += `${count} `;
        count++;
      }
    }
    triangle += "\n";
  }
  return triangle;
}

let resTriangle = tri(heightTriangle);
console.log(resTriangle);

/////////////////////////////////////////////////////////
// 2.

let totalLoop = 15;

function fizzBuzz(n) {
  let out = "";
  for (var i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      out += "Fizz Buzz";
    } else if (i % 3 === 0) {
      out += "Fizz";
    } else if (i % 5 === 0) {
      out += "Buzz";
    } else {
      out += i;
    }
    out += "\n";
  }
  return out;
}

let resFizzBuzz = fizzBuzz(totalLoop);
console.log(resFizzBuzz);

////////////////////////////////////////////////////////////
// 3.

let weightBody = 65;
let heightBody = 177;

let heightBodyM = heightBody / 100;

function bodyMass(w, h) {
  let stat;
  let index = w / Math.pow(h, 2);

  if (index < 18.5) {
    stat = "less weight";
  } else if (index >= 18.5 && index <= 24.9) {
    stat = "ideal";
  } else if (index >= 25.0 && index <= 29.9) {
    stat = `over weight`;
  } else if (index >= 30.0 && index <= 39.9) {
    stat = `very overweight`;
  } else {
    stat = `obesity`;
  }
  return stat;
}

let resBodyMass = bodyMass(weightBody, heightBodyM);
console.log(resBodyMass);

/////////////////////////////////////////////////////////////
// 4.

let numbOddEven = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let oddEvenResult = numbOddEven.filter((number) => {
  return number % 2 == 0;
});

console.log(oddEvenResult);

//////////////////////////////////////////////////////////////
// 5.

let wordSample = "Hello World";

function wordArr(arr) {
  let wordSplit;
  wordSplit = arr.split(" ");
  return wordSplit;
}

let wordResult = wordArr(wordSample);
console.log(wordResult);
