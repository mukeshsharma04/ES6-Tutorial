var Employee = class Employee {
 constructor(name) {
  this.name = name;
 }

 shoutName() {
  return this.name.toUpperCase();
 }
 
}

let emp = new Employee("Anil");

console.log(emp.shoutName());


let Boss = class Boss extends Employee {
 work() {
  console.log(this.name);
  console.log(this.name, 'is working like a BOSS');
 }
}

let emp2 = new Boss('Vinay');
console.log(emp2.work());
