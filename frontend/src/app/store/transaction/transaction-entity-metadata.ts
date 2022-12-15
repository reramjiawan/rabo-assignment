import { EntityMetadata } from '@ngrx/data';
import { isoStringToDate } from '../../helper/iso-string-to-date';
import { Transaction } from './transaction.interface';

export const transactionEntityMetadata: Partial<EntityMetadata<Transaction>> = {
  selectId: (transaction) => `${transaction.id}-${transaction.timestamp}`,
  sortComparer: (transactionA, transactionB) =>
    isoStringToDate(transactionA.timestamp) < isoStringToDate(transactionB.timestamp) ? 1 : -1,
};
