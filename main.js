var account = new BankAccount();

function print() {
  document.getElementById('statement').innerHTML = account.printStatement();
}

