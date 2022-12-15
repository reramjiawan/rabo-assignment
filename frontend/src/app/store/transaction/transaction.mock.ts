import { Transaction, Transactions } from './transaction.interface';

export const mockTransaction: Transaction = {
  id: 1,
  timestamp: '2022-11-08T10:30:47.123456',
  amount: 17.95,
  currencyCode: 'USD',
  currencyRate: 1.173628,
  description: 'Some interesting description',
  otherParty: {
    name: 'Mister X',
    iban: 'NL00RABO0123456789',
  },
};

export const mockTransactions: Transaction[] = [mockTransaction];

export const mockTransactionsApi: Transactions = {
  days: [
    {
      id: '2022-11-08',
      transactions: [mockTransaction],
    },
  ],
};
