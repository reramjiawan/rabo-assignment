import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SharedModule } from '../../../shared/shared.module';
import { LoadingProgressComponent } from './loading-progress.component';

describe('LoadingProgressComponent', () => {
  let component: LoadingProgressComponent;
  let fixture: ComponentFixture<LoadingProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadingProgressComponent],
      imports: [SharedModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LoadingProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a image in the DOM', () => {
    const element = fixture.debugElement.query(By.css('ion-img'));

    expect(element).toBeTruthy();
  });

  it('should have a ion-progress-bar in the DOM', () => {
    const element = fixture.debugElement.query(By.css('ion-progress-bar'));

    expect(element).toBeTruthy();
  });
});
