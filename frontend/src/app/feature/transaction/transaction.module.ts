import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionViewComponent } from './transaction-view/transaction-view.component';
import { TransactionComponent } from './transaction/transaction.component';
import { TransactionDetailViewComponent } from './transaction-detail-view/transaction-detail-view.component';
import { TransactionSummaryComponent } from './transaction-summary/transaction-summary.component';

@NgModule({
  declarations: [
    TransactionComponent,
    TransactionViewComponent,
    TransactionDetailViewComponent,
    TransactionSummaryComponent,
  ],
  imports: [SharedModule, TransactionRoutingModule],
})
export class TransactionModule {}
