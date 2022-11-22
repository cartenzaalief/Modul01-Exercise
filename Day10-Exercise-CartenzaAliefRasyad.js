//////////////////////////////////////////////////////////////////////////////////
// 1.

// TITLE : Convert column title to number

// INPUT :
// 1. Store column title in variable
let columnTitle = "AZ";

// PROCESS :
let columnToNumber = (letter) => {
  // 1. Create string of alphabet
  let alphabet = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // 2. Create variable that store number result
  let number = 0;

  // 3. Use FOR looping to find corresponding number from letter
  for (let i = 0; i < letter.length; i++) {
    number = number * (alphabet.length - 1) + alphabet.indexOf(letter[i]);
  }

  // OUTPUT :
  // 1. Return number result
  return number;
};

let resultNumber = columnToNumber(columnTitle);
// 2. Print number result
console.log(resultNumber);

///////////////////////////////////////////////////////////////////////////////////
// 2.

// TITLE : Find single element from array

// INPUT :
// 1. Store array of numbers in variable
let nums = [4, 1, 2, 1, 2, 3];

// PROCESS :
let singleElement = (number) => {
  // 1. Create new variable to store result
  let singleResult = [];

  // 2. Use FOR looping to check every number
  for (let i = 0; i < number.length; i++) {
    // 3. Create new variable for conditional statement
    let count = 0;

    // 4. Use second FOR looping to check duplicate
    for (let j = 0; j < number.length; j++) {
      if (number[i] == number[j]) {
        count++;
      }
    }

    // OUTPUT :
    if (count == 1) {
      // 1. PUSH result to new array
      singleResult.push(number[i]);
    }
  }
  // 2. Return new array result
  return singleResult;
};

//3. Print single element result
let singleElementResult = singleElement(nums);
console.log(singleElementResult);

/////////////////////////////////////////////////////////////////////////////////////
// 3.

// TITLE : Anagram of two strings

// INPUT :
// 1. Create 2 different strings
let s = "cat";
let t = "act";

// PROCESS :
let anagram = (str1, str2) => {
  // 1. Use IF conditional statment
  if (str1.length !== str2.length) {
    return false;
  } else {
    // 2. Use toLowerCase, split, sort, and join, then compare each other string
    str1.toLowerCase().split("").sort().join("") ===
      str2.toLowerCase().split("").sort().join("");

    // OUTPUT :
    // 1. Return result true
    return true;
  }
};

let anagramResult = anagram(s, t);
// 2. Print anagram result
console.log(anagramResult);

///////////////////////////////////////////////////////////////////////////////////////
// 4.

// TITLE : Climbing a staircase

/*
    1 : 1
    2 : 2
    3 : 3
    4 : 5
    5 : 8
    6 : 13
*/
// NOTE : Same as fibonacci system, use recursive function

// INPUT :
// 1. Store how many staircase to climb in variable
let stair = 10;

// PROCESS :
let climbing = (n) => {
  // 1. Use IF conditional statement
  if (n == 1) {
    return 1;
  } else if (n == 2) {
    return 2;

    // 2. Use recursive function
  } else {
    // OUTPUT :
    // 1. Return result from recursive function
    return climbing(n - 1) + climbing(n - 2);
  }
};

let climbResult = climbing(stair);
// 2. Print how many ways result
console.log(climbResult);
