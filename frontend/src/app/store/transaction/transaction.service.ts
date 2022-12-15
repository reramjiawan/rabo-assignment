import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Transaction } from './transaction.interface';

@Injectable({
  providedIn: 'root',
})
export class TransactionService extends EntityCollectionServiceBase<Transaction> {
  constructor(elementsFactory: EntityCollectionServiceElementsFactory) {
    super('Transaction', elementsFactory);
  }
}
