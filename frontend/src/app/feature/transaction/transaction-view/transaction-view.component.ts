import { Component, OnInit } from '@angular/core';
import { take, tap } from 'rxjs';
import { TransactionService } from '../../../store/transaction/transaction.service';

@Component({
  selector: 'frontend-transaction-view',
  templateUrl: './transaction-view.component.html',
})
export class TransactionViewComponent implements OnInit {
  transactions$ = this.transactions.entities$;

  constructor(private transactions: TransactionService) {}

  ngOnInit() {
    this.getTransactions();
  }

  getTransactions() {
    this.transactions.getAll();
  }

  handleRefresh(event: any) {
    this.getTransactions();
    this.transactions.loading$
      .pipe(
        take(2),
        tap(() => {
          event.target.complete();
        })
      )
      .subscribe();
  }
}
