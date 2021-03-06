(function () {
  'use strict';
}());

var account;

beforeEach(function() {
  account = new BankAccount();
});

describe ('customer', function() {

  it('should be able to make a deposit of a certain amount', function() {
    account.deposit(20);
    expect(account.transactions[account.transactions.length-1].balance).toEqual(20);
  });

  it('should be able to make a withdrawal of a certain amount', function() {
    account.deposit(20);
    account.withdraw(5);
    expect(account.transactions[account.transactions.length-1].balance).toEqual(15);
  });

  describe('should be able to view', function() {

    it('current balance', function() {
      account.deposit(20);
      account.withdraw(5);
      expect(account.accountBalance()).toEqual(15);
    });

    it('a full printed statement with all the transactions', function() {
      account.deposit(20);
      account.withdraw(5);
      expect(account.printStatement()).toContain('20')
    });
  });
});