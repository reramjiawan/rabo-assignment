import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../../../shared/shared.module';
import { mockTransaction } from '../../../store/transaction/transaction.mock';
import { TransactionSummaryComponent } from './transaction-summary.component';

describe('TransactionSummaryComponent', () => {
  let component: TransactionSummaryComponent;
  let fixture: ComponentFixture<TransactionSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionSummaryComponent],
      imports: [SharedModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a visible transaction in the DOM when Input has a value', () => {
    component.transaction = mockTransaction;
    fixture.detectChanges();

    const element = fixture.debugElement.query(By.css('ion-card'));
    expect(element).toBeTruthy();
  });
});
