describe ('user', function() {

  it('should be able to make a deposit of a certain amount', function() {
    var account = new BankAccount();
    account.deposit(20);
    expect(account.transactions[account.transactions.length-1].balance).toEqual(20);
  });

  it('should be able to make a withdrawal of a certain amount', function() {
    var account = new BankAccount();
    account.deposit(20);
    account.withdraw(5);
    expect(account.transactions[account.transactions.length-1].balance).toEqual(15);
  });

});