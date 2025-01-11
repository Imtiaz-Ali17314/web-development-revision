// Q.1 You are creating a website for your college. Create a class User with 2 properties, name & email. It also has a method called viewData( ) that allows user to view website data.

let data = "Secret Information";

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  viewData() {
    console.log("website data:", data);
  }
}

let stu1 = new User("Imtiaz", "imt@gmail.com");
let stu2 = new User("Abbas", "abs@gmail.com");
let tec1 = new User("Techer1", "teac@gmail.com");

// Q.2 Create a new class called Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website data.

class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }
  editData() {
    data = "some new data";
  }
}

let admin1 = new Admin("admin1", "admin@gmial.com");
