let student = {
  // Simple Object
  fullName: "Imtiaz Ali",
  code: 17314,
  class: 12,
  marks: 94,
  printMarks: function () {
    console.log("Marks =", this.marks);
  },
};

// Prototype --> by default property of object.

let employee = {
  // Simple Object
  calTax() {
    console.log("Your tax is 10%. ");
  },
};

let imtiaz = {
  salry: 20000,
  calTax() {
    console.log("Your tax is 20%. ");
  },
};

imtiaz.__proto__ = employee; // employee is prototype of obj imtiaz

// Class for Bank

class client {
  constructor(name, cnic) {
    console.log("new obj is creating");
    this.fullName = name;
    this.CNIC = cnic;
  }
  credit() {
    console.log("you credit your money.");
  }
  debit() {
    console.log("you debit your money.");
  }
}

let hassan = new client("Hassan", 7130398050238);
console.log(hassan);
let mir = new client("Mir", 7104580958649);
console.log(mir);
let imtiazAli = new client("Imtiaz Ali", 71056845787538);
console.log(imtiazAli);

// Inheritance in JS       >>> keyword for inheritance  --->  extends

class person {
  constructor(name) {
    this.specie = "homo sepien";
    this.name = name;
  }
  eat() {
    console.log("eat");
  }
  sleep() {
    console.log("sleep");
  }
  work() {
    console.log("do nothing");
  }
}

class engineer extends person {
  // inherit person properties as parent into engineer class as child
  work() {
    console.log("problem solving and do something.");
  }
}

let engObj = new engineer();

// Super keyword  --> which is used to call parent construtor from child constructor

class doctor extends person {
  constructor(name) {
    super(name); // ---> call to parent constructor and pass name to person constructor.
  }
  work() {
    console.log("solving health problems and do something.");
  }
}

let docObj = new doctor("ImtiazAli");
