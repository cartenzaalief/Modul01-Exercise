data = [
  {
    name: "Avanza",
    brand: "Toyota",
    machine: "DOHC",
    cc: 1500,
  },
  {
    name: "Supra",
    brand: "Toyota",
    machine: "V8",
    cc: 5000,
  },
  {
    name: "ERTIGA",
    brand: "Suzuki",
    machine: "DOHC",
    cc: 1550,
  },
];

let print = (data, cbfn) => {
  let hasil = "";
  for (let i = 0; i < data.length; i++) {
    let { name, brand, machine, cc } = data[i];

    if (!cbfn) {
      hasil += `${i + 1}. ${brand} ${name} with ${machine} ${cc.toLocaleString(
        "id"
      )}\n`;
    } else if (cbfn(data[i])) {
      hasil = `${i + 1}. ${brand} ${name} with ${machine} ${cc.toLocaleString(
        "id"
      )}`;

      break;
    }
  }
  return hasil;
};

let filterName = (obj) => {
  return obj.name == "Supra";
};

let hasilPrint = print(data, filterName);
console.log(hasilPrint);
