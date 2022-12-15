import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '../ionic/ionic.module';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [IonicModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call navigateByUrl with path "/loading" on ngOnInit', () => {
    // Arrange
    const router = TestBed.inject(Router);
    jest.spyOn(router, 'navigateByUrl');

    // Act
    fixture.ngZone?.run(() => {
      component.ngOnInit();
    });

    // Assert
    expect(router.navigateByUrl).toHaveBeenCalledWith('/loading', { skipLocationChange: true });
  });
});
