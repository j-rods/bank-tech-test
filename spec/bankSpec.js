describe ('user', function() {

  it('should be able to make a deposit of a certain amount', function() {
    var account = new BankAccount();
    account.deposit(20);
    expect(account.transactions[account.transactions.length-1]).toEqual(20);
  });

});