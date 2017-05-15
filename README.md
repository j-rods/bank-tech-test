# Bank Tech Test

## Acceptance Criteria

Given a client makes a deposit of 1000 on 10-01-2012 And a deposit of 2000 on 13-01-2012 And a withdrawal of 500 on 14-01-2012 When she prints her bank statement, she would then see:
```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

### Functionality:
* Deposits.
* withdrawals.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database).

## User Stories

### Making deposits
```
As a customer,
I want to be able to make a deposit at my bank,
so that I can keep my money secured

```
### Making withdrawals

```
As a customer,
I want to be able to make a withdrawal at my bank,
so that I can use my secured money
```

### Viewing balance

```
As a customer,
I want my account to display the transaction date,
so that I can track my transactions

As a customer,
I want my account to display the transaction type,
so that I can track the type of transaction

```

### Printing Statements

```
As a customer,
I want to be able to print a bank statement,
so that I can see my current balance

As a customer,
I want my account to print a full bank statement,
so that I can see all my transactions

```

