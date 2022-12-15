import { NgModule } from '@angular/core';
import { EntityDataModule, EntityDataService } from '@ngrx/data';
import { TransactionDataService } from '../transaction/transaction-data.service';
import { entityConfig } from './entity-config';

@NgModule({
  providers: [TransactionDataService],
  imports: [EntityDataModule.forRoot(entityConfig)],
})
export class EntityStoreModule {
  constructor(entityDataService: EntityDataService, transactionService: TransactionDataService) {
    entityDataService.registerService('Transaction', transactionService);
  }
}
