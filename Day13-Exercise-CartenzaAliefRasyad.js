////////////////////////////////////////////////////////////////////////
// 1.

let weekendCheck = (date) => {
  if (new Date(date).getDay() == 6 || new Date(date).getDay() == 0) {
    return "Weekend";
  } else {
    return "Isn't weekend";
  }
};

let weekendResult = weekendCheck("2022-11-22");
console.log(weekendResult);

////////////////////////////////////////////////////////////////////////
// 2.

let findGCD = (numbA, numbB) => {
  while (numbA != numbB) {
    if (numbA > numbB) {
      numbA -= numbB;
    } else {
      numbB -= numbA;
    }
  }

  return numbA;
};

let resultGCD = findGCD(60, 24);
console.log(resultGCD);

////////////////////////////////////////////////////////////////////////
// 3.

let findLCM = (numbA, numbB) => {
  let large = Math.max(numbA, numbB);
  let small = Math.min(numbA, numbB);
  let result = large;

  do {
    result += large;
  } while (result % small !== 0);

  return result;
};

let resultLCM = findLCM(24, 60);
console.log(resultLCM);

////////////////////////////////////////////////////////////////////////
// 4.

let commonChar = (string) => {
  let stringObj = {};
  let max = 0;
  let maxChar = "";

  for (let char of string) {
    if (stringObj[char]) {
      stringObj[char]++;
    } else {
      stringObj[char] = 1;
    }
  }

  for (let char in stringObj) {
    if (stringObj[char] > max) {
      max = stringObj[char];
      maxChar = char;
    }
  }

  return maxChar;
};

let commonResult = commonChar("heyyyyyyooo");
console.log(commonResult);

////////////////////////////////////////////////////////////////////////
// 5.

// With Sort Function
let sortString1 = (string) => {
  let arrWords = string.split("").sort().join("");
  return arrWords;
};

let sortResult1 = sortString1("alphabet");
console.log(sortResult1);

// Without Sort Function
let sortString2 = (string) => {
  let arrWords = string.split("");
  let temp = "";

  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < string.length; j++) {
      if (arrWords[j] > arrWords[i]) {
        temp = arrWords[i];
        arrWords[i] = arrWords[j];
        arrWords[j] = temp;
      }
    }
  }

  return arrWords.join("");
};

let sortResult2 = sortString2("alphabet");
console.log(sortResult2);

////////////////////////////////////////////////////////////////////////
// 6.

let minDate = (date) => {
  let min = new Date(Math.min(...date));
  return min;
};

let dates = [
  new Date("2022-11-24"),
  new Date("2022-11-22"),
  new Date("2022-11-26"),
];
let minDateResult = minDate(dates);
console.log(minDateResult);

////////////////////////////////////////////////////////////////////////
// 7.

let sumArr = (arr) => {
  let sumRes = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      sumRes += arr[i][j];
    }
  }

  return sumRes;
};

let arrayTest = [
  [1, 2, 3],
  [3, 4, 5],
  [2, 3, 4],
];

let sumArrResult = sumArr(arrayTest);
console.log(sumArrResult);

/////////////////////////////////////////////////////////////////////////
// 8.

let commonPrefix = (string1, string2) => {
  let prefixResult = "";

  for (let i = 0; i < string1.length; i++) {
    if (string1[i] == string2[i]) {
      prefixResult += string2[i];
    }
  }

  return prefixResult;
};

let arrPrefix = (arr, cbfn) => {
  let arrPrefixResult = "";

  for (let i = 1; i <= arr.length - 1; i++) {
    arrPrefixResult = cbfn(arr[0], arr[i]);
  }

  return arrPrefixResult;
};

let findPrefix = ["geeksforgeeks", "geeks", "geek", "geeker"];
let prefixRes = arrPrefix(findPrefix, commonPrefix);
console.log(prefixRes);

//////////////////////////////////////////////////////////////////////////
// 9.

let arrCopies = (arr) => {
  let copiesResult = [];

  for (let i = 0; i < arr.length / 2; i++) {
    copiesResult.push(arr[i]);
  }

  return copiesResult;
};

let arrCopy = ["Car", "Bike", "Truck", "Bus", "Train"];
let copiesResult = arrCopies(arrCopy);
console.log(copiesResult);

//////////////////////////////////////////////////////////////////////////
// 10.

let daysInMonth = (month, year) => {
  let days = new Date(year, month, 0).getDate();
  return `Month = ${month}, Year = ${year} -> ${days}`;
};

let daysResult = daysInMonth(1, 2022);
console.log(daysResult);

//////////////////////////////////////////////////////////////////////////
// 11.

let daysPassed = (date) => {
  let current = new Date(date.getTime());
  let newYear = new Date(date.getFullYear(), 0, 1);

  return Math.ceil((current - newYear + 1) / (1000 * 60 * 60 * 24));
};

let daysPassedResult = daysPassed(new Date("2022-11-22"));
console.log(daysPassedResult);

//////////////////////////////////////////////////////////////////////////
// 12.

let calculateAge = (birth) => {
  let diff = Date.now() - birth.getTime();

  return Math.abs(new Date(diff).getUTCFullYear() - 1970);
};

let ageResult = calculateAge(new Date("1999-08-10"));
console.log(ageResult);
