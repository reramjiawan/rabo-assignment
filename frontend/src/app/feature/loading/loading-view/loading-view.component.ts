import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, Subscription } from 'rxjs';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'frontend-loading-view',
  templateUrl: './loading-view.component.html',
})
export class LoadingViewComponent implements OnInit, OnDestroy {
  progress$ = this.loading.progress$;
  subscriptions = new Subscription();

  constructor(private router: Router, private loading: LoadingService) {}

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  ngOnInit() {
    this.subscriptions.add(
      this.progress$.pipe(debounceTime(500)).subscribe((progress) => {
        if (progress === 1) {
          this.router.navigateByUrl('/transaction', { replaceUrl: true });
        }
      })
    );
  }
}
