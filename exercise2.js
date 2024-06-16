// Task 1: Constructor function for Account object
function Account(accountNumber, owner, initialBalance = 0) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.balance = initialBalance;
}

// Task 2: Implement methods within the Account object to deposit and withdraw funds
Account.prototype.deposit = function(amount) {
    if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance: ${this.balance}`);
    } else {
        console.log("Deposit amount must be positive.");
    }
};

Account.prototype.withdraw = function(amount) {
    if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
    } else {
        console.log("Invalid withdrawal amount.");
    }
};

// Task 3: Create a method to calculate compound interest
Account.prototype.calculateCompoundInterest = function(rate, timesCompounded, years) {
    if (rate < 0 || timesCompounded < 1 || years < 0) {
        console.log("Invalid input for interest calculation.");
        return;
    }

    let compoundInterest = this.balance * Math.pow((1 + rate / timesCompounded), timesCompounded * years);
    console.log(`Balance after ${years} years with a rate of ${rate} compounded ${timesCompounded} times per year: ${compoundInterest.toFixed(2)}`);
    return compoundInterest;
};

// array
let account1 = new Account(12345, "John Doe", 1000);

console.log(`Account Number: ${account1.accountNumber}`);
console.log(`Account Owner: ${account1.owner}`);
console.log(`Initial Balance: ${account1.balance}`);

account1.deposit(500);
account1.withdraw(200);
account1.calculateCompoundInterest(0.05, 4, 2);
