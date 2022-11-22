//////////////////////////////////////////////////////////////////////////////////
// Map Duplicate

// TITLE : Addition each value with 2

// INPUT :
// 1. Store array of numbers in variable
let numbA = [1, 2, 3, 4, 5];

// PROCESS :
// 1. Create addition function
let addition = (number, index) => {
  return number + 3;
};

let duplicateMap = (arr, cbfn) => {
  // 2. Create new variable with empty array
  let mapResult = [];
  // 3. Use FOR looping to loop each data from input
  for (let i = 0; i < arr.length; i++) {
    mapResult.push(cbfn(arr[i], i));
  }

  // OUTPUT :
  // 1. Return addition result
  return mapResult;
};

let mapDuplicateResult = duplicateMap(numbA, addition);
// 2. Print map result
console.log("Map result :", mapDuplicateResult);

//////////////////////////////////////////////////////////////////////////////////
// Filter Duplicate

// TITLE : Filter even number

// INPUT :
// 1. Store array of numbers in variable
let numbB = [1, 2, 3, 4, 5];

// PROCESS :
// 1. Create function that return even number
let filterEven = (number) => {
  return number % 2 == 0;
};

let duplicateFilter = (arr, cbfn) => {
  // 2. Create new variable with empty array
  let filterResult = [];

  // 3. Use FOR looping to loop each data from input
  for (let i = 0; i < arr.length; i++) {
    let isTrue = cbfn(arr[i]);

    // 4. Use IF conditional statement to filter even number
    if (isTrue) {
      filterResult.push(arr[i]);
    }
  }
  // OUTPUT :
  // 1. Return filter result

  return filterResult;
};

let filterDuplicateResult = duplicateFilter(numbB, filterEven);
// 2. Print even number filter result
console.log("Filter even number result :", filterDuplicateResult);

/////////////////////////////////////////////////////////////////////////////////////////
// FindIndex Duplicate

// TITLE : Find index of odd number

// INPUT :
// 1. Store array of numbers in variable
let numbC = [2, 4, 5, 6, 8];

// PROCESS :
// 1. Create function that return odd number
let indexOdd = (number) => {
  return number % 2 == 1;
};

let duplicateFindIndex = (arr, cbfn) => {
  // 2. Create new variable to store result
  let indexResult = "";

  // 3. Use FOR looping to find index
  for (let i = 0; i < arr.length; i++) {
    if (cbfn(arr[i]) == true) {
      indexResult += i;
    }
  }
  // OUTPUT :
  // 1. Return findIndex result
  return indexResult;
};

let findIndexDuplicateResult = duplicateFindIndex(numbC, indexOdd);
// 2. Print find index of odd number result
console.log("Index of odd number :", findIndexDuplicateResult);
