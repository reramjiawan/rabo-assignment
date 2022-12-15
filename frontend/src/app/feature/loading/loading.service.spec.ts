import { TestBed } from '@angular/core/testing';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
import { of, skip, take } from 'rxjs';
import { LoadingService } from './loading.service';

describe('LoadingService', () => {
  let service: LoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadingService, { provide: Router, useClass: MockRouter }],
    });
    service = TestBed.inject(LoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a value of 0 when subscribing to the progress observable when navigation has started', (done) => {
    service.progress$.pipe(take(1)).subscribe((value) => {
      expect(value).toEqual(0);
      done();
    });
  });

  it('should have a value of 1 when subscribing to the progress observable when navigation has ended', (done) => {
    service.progress$.pipe(skip(1)).subscribe((value) => {
      expect(value).toEqual(1);
      done();
    });
  });
});

class MockRouter {
  events = of(new RouteConfigLoadStart({}), new RouteConfigLoadEnd({}));
}
