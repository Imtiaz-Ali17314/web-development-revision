// Arrays
//Let's Parctice

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(companies);

let deletedItem = companies.shift();
console.log("deleted", deletedItem);
console.log(companies);

console.log("Replace Ola");
companies.splice(1, 1, "Ola");
console.log(companies);

console.log("Add Amazone");
companies.push("Amazon");
console.log(companies);
