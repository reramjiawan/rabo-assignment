export interface Transactions {
  days: Day[];
}

export interface Day {
  id: string;
  transactions: Transaction[];
}

export interface Transaction {
  amount: number;
  currencyCode: string;
  currencyRate?: number;
  description: string;
  id: number;
  timestamp: string;
  otherParty?: OtherParty;
}

export interface OtherParty {
  name: string;
  iban: string;
}
