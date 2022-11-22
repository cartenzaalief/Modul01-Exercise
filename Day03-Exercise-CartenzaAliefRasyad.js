//////////////////////////////////////
// Bizz Buzz BizzBuzz

let number = 45;

for (let i = 1; i <= number; i++) {
  if (i % 15 == 0) {
    console.log(`BizzBuzz => ${i}`);
  } else if (i % 3 == 0) {
    console.log(`Bizz => ${i}`);
  } else if (i % 5 == 0) {
    console.log(`Buzz => ${i}`);
  }
}

//////////////////////////////////////
// 1. Write a code to display the multiplication table of a given integer
/*
    Number => 9
    9 x 1 = 9
    9 x 2 = 18
    .....
    9 x 10 = 90
*/

let num = 9;

for (let i = 1; i <= 10; i++) {
  let result = i * num;

  console.log(`${num} x ${i} = ${result}`);
}

////////////////////////////////////////
// 2. Write a code to check whether a string is a palindrome or not

// Kata yang jika dibolak balik tetap sama
// string = katak

let palind = "katak";
let newPalind = "";

for (let i = palind.length - 1; i >= 0; i--) {
  newPalind += palind.slice(i, i + 1);
}

if (newPalind == palind) {
  console.log(`${palind} is a palindrome`);
} else {
  console.log(`${palind} is not a palindrome`);
}

////////////////////////////////////////
// 3. Write a code to convert centimeter to kilometer

// 1 cm = 1 / 100000 km

let cm = 1;
let km = cm / 100000;

console.log(`${cm} centimeter = ${km} kilometer`);

/////////////////////////////////////////
// 4. Write a code to format number as currency (IDR)

let money = 1000000;

console.log(`Rp. ${money.toLocaleString("id")},00`);

/////////////////////////////////////////
// 5. Write a code to remove the first occurance of a given "search string" from a string

// string = "Hello world", search string = "ell" -> "Ho world"

let str = "Hello world";
let searchStr = "ell";
let remove = str.indexOf(searchStr);

if (remove == -1) {
  console.log(str);
} else {
  console.log(str.slice(0, remove) + str.slice(remove + searchStr.length));
}

////////////////////////////////////////
// 6. Write a code to capitalize the first letter of each word in a string

// string = "hello world" -> "Hello World"

let strg = "hai hai hai hai";
let word = strg.split(" ");

for (let i = 0; i < word.length; i++) {
  word[i] = word[i][0].toUpperCase() + word[i].slice(1);
}

let resCap = word.join(" ");
console.log(resCap);

////////////////////////////////////////////
// 7. Write a code to reverse a string

let string = "Hello World";

let newString = "";
for (let i = string.length - 1; i >= 0; i--) {
  newString += string.slice(i, i + 1);
}
console.log(newString);
