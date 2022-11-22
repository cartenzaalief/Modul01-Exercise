//////////////////////////////////////////////
// 1.

class Student {
  constructor(name, email, age, score) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.score = score;
  }
}

const arrStudent = [
  new Student("John", "john@mail.com", "1998-01-25", 75),
  new Student("Andrew", "andrew@mail.com", "1999-04-04", 82),
  new Student("Michael", "michael@mail.com", "1997-07-07", 92),
  new Student("George", "george@mail.com", "1995-08-10", 87),
];

let calculateStudent = (arr) => {
  let maxScore = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].score > maxScore.score) {
      maxScore = arr[i];
    }
  }

  let minScore = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].score < minScore.score) {
      minScore = arr[i];
    }
  }

  let totalScore = 0;
  for (let i = 0; i < arr.length; i++) {
    totalScore += arr[i].score;
  }
  let avgScore = totalScore / arr.length;

  let dateToAge = function (age) {
    let today = new Date();
    let birthDate = new Date(age);
    let old = today.getFullYear() - birthDate.getFullYear();
    let month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      old--;
    }

    return old;
  };

  for (let i = 0; i < arr.length; i++) {
    arr[i].age = dateToAge(arr[i].age);
  }

  let maxAge = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].age > maxAge.age) {
      maxAge = arr[i];
    }
  }

  let minAge = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].age < minAge.age) {
      minAge = arr[i];
    }
  }

  let totalAge = 0;
  for (let i = 0; i < arr.length; i++) {
    totalAge += arr[i].age;
  }
  let avgAge = totalAge / arr.length;

  let resultScore = {
    Score: {
      highest: maxScore,
      lowest: minScore,
      average: avgScore,
    },
    Age: {
      highest: maxAge,
      lowest: minAge,
      average: avgAge,
    },
  };

  console.log(resultScore);
};

calculateStudent(arrStudent);

//////////////////////////////////////////////
// 2.

class Product {
  constructor(name, price, qty) {
    this.name = name;
    this.price = price;
    this.qty = qty;
  }
}

class Transaction {
  total = 0;
  boughtProduct = [];

  cartList(productList) {
    this.boughtProduct.push(productList);
  }

  cartView() {
    let myCart = "MY CART\n\n";
    for (let i = 0; i < this.boughtProduct.length; i++) {
      myCart += `Product: ${this.boughtProduct[i].name}\nQuantity: ${this.boughtProduct[i].qty}\nPrice / qty: ${this.boughtProduct[i].price}`;
      myCart += "\n\n";
    }

    console.log(myCart);
  }

  checkout() {
    let myCheckout = "Checkout\n\nTotal transaction:\n";
    for (let i = 0; i < this.boughtProduct.length; i++) {
      myCheckout += `${this.boughtProduct[i].name}: ${
        this.boughtProduct[i].qty * this.boughtProduct[i].price
      }`;
      myCheckout += "\n";

      this.total += this.boughtProduct[i].qty * this.boughtProduct[i].price;
    }
    myCheckout += `Total Price: ${this.total}\n\n`;

    console.log(myCheckout);
  }

  payment(money) {
    let pay = "Payment\n\n";
    if (money > this.total) {
      pay += `Transaction Succesful\nTotal Price: ${
        this.total
      }\nMoney: ${money}\nChange: ${money - this.total}`;
    } else if (money < this.total) {
      pay += `Transaction Canceled\nTotal Price: ${this.total}\nMoney: ${money}\nMoney is not enough`;
    } else {
      pay += `Transaction Succesful\nTotal Price: ${this.total}\nMoney: ${money}`;
    }
    console.log(pay);
  }
}

// Product List
const products = [
  new Product("Jacket", 100000, 5),
  new Product("Hoodie", 150000, 7),
  new Product("Sweater", 120000, 8),
];

let transaction = new Transaction();

// Input Product
transaction.cartList(products[0]);
transaction.cartList(products[1]);
transaction.cartList(products[2]);

// Show Cart List
transaction.cartView();

// Show Total Transaction
transaction.checkout();

// Input money
transaction.payment(3000000);
