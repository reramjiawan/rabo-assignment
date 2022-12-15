import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IonicModule } from '../../../ionic/ionic.module';

import { ShellToolbarComponent } from './shell-toolbar.component';

describe('ShellToolbarComponent', () => {
  let component: ShellToolbarComponent;
  let fixture: ComponentFixture<ShellToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShellToolbarComponent],
      imports: [IonicModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ShellToolbarComponent);
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
});
