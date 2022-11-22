//////////////////////////////////////////////////////////////////////
// 1.

let fahrenheitConvert = (celcius) => {
  return (celcius * 9) / 5 + 32;
};

//////////////////////////////////////////////////////////////////////
// 2.

let oddEven = (number) => {
  if (number % 2 == 1) {
    return "Odd";
  } else {
    return "Even";
  }
};

/////////////////////////////////////////////////////////////////////
// 3.

let primeNumber = (number) => {
  isPrime = true;
  if (number == 1) {
    isPrime = false;
  } else if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        isPrime = false;
        break;
      }
    }
  }

  if (isPrime) {
    return "Prime Number";
  } else {
    return "Not a Prime Number";
  }
};

/////////////////////////////////////////////////////////////////////
// 4.

let sumNumber = (number) => {
  return (number * (number + 1)) / 2;
};

////////////////////////////////////////////////////////////////////
// 5.

let factorialNumber = (number) => {
  let answer = 1;
  if (number == 0 || number == 1) {
    return answer;
  } else {
    for (let i = number; i >= 1; i--) {
      answer = answer * i;
    }
    return answer;
  }
};

///////////////////////////////////////////////////////////////////////
// 6.

let fibonacci = (number) => {
  let numbA = 0;
  let numbB = 1;
  let sum;
  for (let i = 2; i < number; i++) {
    sum = numbA + numbB;
    numbA = numbB;
    numbB = sum;
  }
  return numbB;
};

module.exports = {
  fahrenheitConvert,
  oddEven,
  primeNumber,
  sumNumber,
  factorialNumber,
  fibonacci,
};
