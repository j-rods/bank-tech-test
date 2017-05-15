(function () {
  'use strict';
}());

function BankAccount() {
  this.transactions = []
}

BankAccount.prototype.deposit = function(amount) {
  //push amount into array
  this.transactions.push({balance: amount});
}

BankAccount.prototype.withdraw = function(amount) {
  //pop amount from array
  var total = this.transactions[this.transactions.length-1].balance - amount;
  this.transactions.push({balance: total});
}

BankAccount.prototype.printStatement = function() {
  //print current balance
  return this.transactions[this.transactions.length-1].balance;
}