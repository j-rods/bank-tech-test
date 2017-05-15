(function () {
  'use strict';
}());

function BankAccount() {
  this.transactions = []
}

BankAccount.prototype.deposit = function(amount) {
  if (this.transactions.length > 0) {
    var total = this.accountBalance() + amount;
    this.transactions.push({
      date: new CurrentDate(),
      type: 'Deposit',
      amount: amount,
      balance: total
    });
  } else {
    this.transactions.push({
      date: new CurrentDate(),
      type: 'Deposit',
      amount: amount,
      balance: amount
    });
  }
}

BankAccount.prototype.withdraw = function(amount) {
  var total = this.accountBalance() - amount;
  this.transactions.push({
    date: new CurrentDate(),
    type: 'Withdraw',
    amount: amount,
    balance: total
  });
}

BankAccount.prototype.accountBalance = function() {
  return this.transactions[this.transactions.length-1].balance;
}

BankAccount.prototype.printStatement = function() {
  var list = 'Date || Transaction || Amount || Balance \n';
  for (var i = 0; i < this.transactions.length; i++) {
    list += [
      this.transactions[i].date.formatDate,
      this.transactions[i].type,
      '£'+this.transactions[i].amount,
      '£'+this.transactions[i].balance
    ].join(' || ') + '\n'
  }
  return list;
}
