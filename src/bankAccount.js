(function () {
  'use strict';
}());

function BankAccount() {
  this.transactions = [{balance: 0}]
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

BankAccount.prototype.viewBalance = function() {
  //print current balance
  return this.transactions[this.transactions.length-1].balance;
}

BankAccount.prototype.printStatement = function() {
  for (i = 0; i < account.transactions.length; ++i) {
    console.log('balance: ' + account.transactions[i].balance);
    console.log('');
  }
}