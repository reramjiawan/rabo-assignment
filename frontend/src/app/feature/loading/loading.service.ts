import { Injectable, OnDestroy } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable()
export class LoadingService implements OnDestroy {
  subscriptions = new Subscription();
  private loadStartCount = 0;
  private loadEndCount = 0;
  private loadSubject = new BehaviorSubject(0);
  progress$ = this.loadSubject.asObservable();

  constructor(private router: Router) {
    this.subscriptions.add(
      this.router.events.subscribe((event) => {
        if (event instanceof RouteConfigLoadStart) {
          this.loadStart();
        } else if (event instanceof RouteConfigLoadEnd) {
          this.loadEnd();
        }
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  private loadEnd() {
    // Timeout is only for simulating loading
    setTimeout(() => {
      this.loadEndCount += 1;
      this.loadSubject.next(this.loadEndCount / this.loadStartCount);
    }, 500);
  }

  private loadStart() {
    this.loadStartCount += 1;
  }
}
