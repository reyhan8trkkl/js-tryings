const personAccount = {
  firstName : "Bruce",
  lastName : "Astor",
  incomes : [500, 750, 650, 350, 200],
  expenses : [75, 25, 125, 425],
  totalIncome : function () {
    var sum = this.incomes.reduce(function(a, b){
      return a + b;
    }, 0);  
    return sum;
  },
  totalExpense : function () {
    var sum = this.expenses.reduce(function(a, b){
      return a + b;
    }, 0);  
    return sum;
  },
  addIncome : function (value) {
    return this.incomes.push(value);
  },
  addExpenses : function (value) {
    return this.expenses.push(value);
  },
  accountInfo : function () {
    let totalProfit = this.totalIncome() - this.totalExpense();
    return `${this.firstName} ${this.lastName} has ${totalProfit} dolar profit today`;
  }

}

personAccount.addIncome(700);
personAccount.addExpenses(220);

console.log(personAccount);

console.log(`He has total income : ${personAccount.totalIncome()}`);
console.log(`He has total expenses : ${personAccount.totalExpense()}`);
console.log(personAccount.accountInfo());




// WITH CONSTRUCTOR
function PersonConst (firstName, lastName, incomes = [], expenses =[]) {  // this is constructor function
  this.firstName = firstName,
  this.lastName = lastName,
  this.incomes = incomes,
  this.expenses = expenses,
  this.totalIncome = () => this.incomes.reduce((a, b) => a + b ),   // arrow function with reduce method
  this.totalExpense = () => this.expenses.reduce((a, b) => a + b ),   // arrow function with reduce method
  this.addIncome = (value) => this.incomes.push(value),
  this.addExpenses = (value) => this.expenses.push(value),
  this.accountInfo = () => `${this.firstName} ${this.lastName} has ${this.totalIncome() - this.totalExpense()} dolar profit today`
}

const person1 = new PersonConst('John', "Doe", [500,600,700,500], [120,25,58]);     // create new object
const person2 = new PersonConst('Sam', "Mathew", [400,50,200,300], [100,15,25,45]);   // create new object

console.log(`${person1.firstName} has total income : ${person1.totalIncome()}`);
console.log(`${person2.firstName} has total income : ${person2.totalIncome()}`);
console.log(person1.accountInfo());
console.log(person2.accountInfo());