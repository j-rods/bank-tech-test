(function () {
  'use strict';
}());

function BankAccount() {
  this.transactions = []
}

BankAccount.prototype.deposit = function(amount) {
  //push amount into array
  if (this.transactions.length > 0) {
    var total = this.transactions[this.transactions.length-1].balance + amount;
    this.transactions.push({date: this.transactionDate(),
                            type: 'Deposit',
                            amount: amount,
                            balance: total});
  } else {
    this.transactions.push({date: this.transactionDate(),
                            type: 'Deposit',
                            amount: amount,
                            balance: amount});
  }
}

BankAccount.prototype.withdraw = function(amount) {
  //pop amount from array
  var total = this.transactions[this.transactions.length-1].balance - amount;
  this.transactions.push({date: this.transactionDate(),
                          type: 'Withdraw',
                          amount: amount,
                          balance: total});
}

BankAccount.prototype.viewBalance = function() {
  //print current balance
  return this.transactions[this.transactions.length-1].balance;
}

BankAccount.prototype.printStatement = function() {
  var list = '';
  for (var i = 0; i < this.transactions.length; i++) {
    list +=`
    '${this.transactions[i].date} || ${this.transactions[i].type} || £${this.transactions[i].amount} || £${this.transactions[i].balance}'
    `
  }
  return list;
}

BankAccount.prototype.transactionDate = function() {
  var date = new Date();
  var currentDate = date.getDate() + '/'
                  + date.getMonth() + '/'
                  + date.getFullYear();

  return currentDate;
}


