import { InjectionToken } from '@angular/core';
import { DefaultDataServiceConfig } from '@ngrx/data';

export class TransactionDataConfig implements DefaultDataServiceConfig {
  root = 'http://localhost:8080/api';
  timeout = 5000;
}

export const TRANSACTION_DATA_CONFIG_TOKEN = new InjectionToken<TransactionDataConfig>('TransactionDataConfig', {
  providedIn: 'root',
  factory: () => new TransactionDataConfig(),
});
