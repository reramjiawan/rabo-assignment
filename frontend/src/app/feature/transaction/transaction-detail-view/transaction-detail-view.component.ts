import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { TransactionService } from '../../../store/transaction/transaction.service';

@Component({
  selector: 'frontend-transaction-detail-view',
  templateUrl: './transaction-detail-view.component.html',
})
export class TransactionDetailViewComponent {
  transaction$ = this.route.queryParams.pipe(
    switchMap((params: Params) =>
      this.transaction.entityMap$.pipe(map((entities) => entities[`${params['id']}-${params['timestamp']}`]))
    )
  );

  constructor(private route: ActivatedRoute, private transaction: TransactionService) {}
}
