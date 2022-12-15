import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '../../../ionic/ionic.module';
import { ShellToolbarComponent } from '../shell-toolbar/shell-toolbar.component';
import { ShellViewComponent } from './shell-view.component';

describe('ShellViewComponent', () => {
  let component: ShellViewComponent;
  let fixture: ComponentFixture<ShellViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShellViewComponent, ShellToolbarComponent],
      imports: [IonicModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ShellViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a frontend-shell-toolbar in the DOM', () => {
    const element = fixture.debugElement.query(By.css('frontend-shell-toolbar'));

    expect(element).toBeTruthy();
  });
});
