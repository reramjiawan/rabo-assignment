import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { map, Observable } from 'rxjs';
import { TRANSACTION_DATA_CONFIG_TOKEN, TransactionDataConfig } from './transaction-data-config';
import { Transaction, Transactions } from './transaction.interface';

@Injectable()
export class TransactionDataService extends DefaultDataService<Transaction> {
  constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    @Inject(TRANSACTION_DATA_CONFIG_TOKEN) private transactionDataConfig: TransactionDataConfig
  ) {
    super('Transaction', http, httpUrlGenerator, transactionDataConfig);
  }

  override getAll() {
    return (super.getAll() as any as Observable<Transactions>).pipe(
      map((value) => value.days.flatMap((day) => day.transactions))
    );
  }
}
