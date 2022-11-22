/////////////////////////////////////////////////
// 1.

const playerOne = {
  nickname: "Dendi",
  realName: "Danil Ishutin",
};

const playerTwo = {
  nickname: "Arteezy",
  realName: "Artour Babaev",
};

const playerThree = {
  nickname: "Arteezy",
  realName: "Artour Babaev",
};

let equal = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

let equalResult = equal(playerThree, playerTwo);
console.log(`Does these objects equal? ${equalResult}`);

/////////////////////////////////////////////////
// 2.

// NOTE: TIDAK TAU CARA UNTUK MEMUNCULKAN VALUE PADA HASIL INTERSECTION

const firstObj = { a: 1, b: 2 };

const secondObj = { a: 1, c: 3 };

let intersection = (obj1, obj2) => {
  const key1 = Object.keys(obj1);
  return key1.filter((key) => {
    return obj2[key] !== undefined;
  });
};

let intersecResult = intersection(firstObj, secondObj);
console.log(`The intersection of two objects: ${intersecResult}`);

/////////////////////////////////////////////////
// 3.

const array1 = [
  { name: "Student1", email: "student1@mail.com" },
  { name: "Student2", email: "student2@mail.com" },
];

const array2 = [
  { name: "Student1", email: "student1@mail.com" },
  { name: "Student3", email: "student3@mail.com" },
];

const arrayCombine = [...array1, ...array2];

const arrayReduce = Array.from(
  arrayCombine.reduce((map, obj) => map.set(obj.name, obj), new Map()).values()
);
console.log("Merged array:", arrayReduce);

//////////////////////////////////////////////////
// 4.

// NOTE: BINGUNG TOTAL

let input = [{ name: "David", age: 20 }];

const output = (arr) => {
  for (let i = 0; i < arr.length * 2; i++) {
    const key = Object.keys(arr[i]);
    console.log(key[i]);
  }
};

const result = output(input);

////////////////////////////////////////////////////
// 5.

const number = 4;

let factorial = (num) => {
  if (num == 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

const facResult = factorial(number);
console.log(`The factorial of ${number} is ${facResult}`);
