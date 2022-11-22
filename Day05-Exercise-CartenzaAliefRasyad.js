//////////////////////////////////////////////
// 1.

const arrNumber = [8, 20, 10, 5, 40, 25];

let arrMin = (number) => {
  return Math.min(...number);
};

let arrMax = (number) => {
  return Math.max(...number);
};

let arrAvg = (number) => {
  let total = 0;
  for (let i = 0; i < number.length; i++) {
    total += number[i];
  }
  return total / number.length;
};

// WITH SORT

let asc = (a, b) => {
  return a - b;
};

let sortMin = (number) => {
  number.sort(asc)
  return number[0]
}

let sortMax = (number) => {
  number.sort(asc)
  return number[number.length - 1]
}

/////////////////////////////////////////////////
// 2.

let arrToString = (word) => {
  let resultString = "";
  for (let i = 0; i < word.length; i++) {
    if (i < word.length - 1) {
      resultString += word[i] + ", ";
    } else {
      resultString += "and " + word[i];
    }
  }
  return resultString;
};

/////////////////////////////////////////////////
// 3.

let wordArr = (arr, separator) => {
  let wordSplit;
  wordSplit = arr.split(separator);
  return wordSplit;
};

/////////////////////////////////////////////////
// 4.

let addition = (num1, num2 = 0) => {
  return num1 + num2;
};

let arrAddition = (arr1, arr2, operation) => {
  let arrAddResult = [];
  let indexResult;

  for (let i = 0; i < arr1.length; i++) {
    indexResult = operation(arr1[i], arr2[i]);
    arrAddResult.push(indexResult);
  }
  return arrAddResult;
};

/////////////////////////////////////////////////
// 5.

let arrNumAdd = (arr, number) => {
  if (arr.includes(number)) {
    return arr;
  } else {
    return [...arr, number];
  }
};

//////////////////////////////////////////////////
// 6.

let evenOnly = (numbers) => {
  let evenNumb = [];
  numbers.filter((number) => {
    if (number % 2 == 0) {
      evenNumb.push(number);
    }
  });
  return evenNumb
};

module.exports = {
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
};
