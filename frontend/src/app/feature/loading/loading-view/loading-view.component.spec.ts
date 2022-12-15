import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { IonicModule } from '../../../ionic/ionic.module';
import { LoadingProgressComponent } from '../loading-progress/loading-progress.component';
import { LoadingService } from '../loading.service';
import { LoadingViewComponent } from './loading-view.component';

describe('LoadingViewComponent', () => {
  let component: LoadingViewComponent;
  let fixture: ComponentFixture<LoadingViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadingViewComponent, LoadingProgressComponent],
      imports: [IonicModule, RouterTestingModule],
      providers: [{ provide: LoadingService, useValue: { progress$: of(1) } }],
    }).compileComponents();

    fixture = TestBed.createComponent(LoadingViewComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a frontend-loading-progress in the DOM when subscribing to progress$', () => {
    fixture.detectChanges();

    const element = fixture.debugElement.query(By.css('frontend-loading-progress'));

    expect(element).toBeTruthy();
  });

  it('should call navigateByUrl with path "/transaction" when loading progress is finished', () => {
    const router = TestBed.inject(Router);
    jest.spyOn(router, 'navigateByUrl');

    fixture.ngZone?.run(() => {
      component.ngOnInit();
    });

    expect(router.navigateByUrl).toHaveBeenCalledWith('/transaction', { replaceUrl: true });
  });

  it('should unsubscribe from observables when the component is destroyed', () => {
    component.ngOnDestroy();

    expect(component.subscriptions.closed).toBeTruthy();
  });
});
