import { Component, Input } from '@angular/core';
import { Transaction } from '../../../store/transaction/transaction.interface';

@Component({
  selector: 'frontend-transaction-summary',
  templateUrl: './transaction-summary.component.html',
  styleUrls: ['./transaction-summary.component.scss'],
})
export class TransactionSummaryComponent {
  @Input()
  transaction: Transaction | undefined;
}
