import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionDetailViewComponent } from './transaction-detail-view/transaction-detail-view.component';
import { TransactionViewComponent } from './transaction-view/transaction-view.component';

const routes: Routes = [
  {
    path: '',
    component: TransactionViewComponent,
  },
  {
    path: 'detail',
    component: TransactionDetailViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TransactionRoutingModule {}
