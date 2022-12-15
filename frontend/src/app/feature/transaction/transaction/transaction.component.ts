import { Component, Input } from '@angular/core';
import { Transaction } from '../../../store/transaction/transaction.interface';

@Component({
  selector: 'frontend-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
})
export class TransactionComponent {
  @Input()
  transaction: Transaction | undefined;
}
