function BankAccount() {
  this.transactions = []
}

BankAccount.prototype.deposit = function(amount) {
  //push amount into array
  this.transactions.push(amount);
}