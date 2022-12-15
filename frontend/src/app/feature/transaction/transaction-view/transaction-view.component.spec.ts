import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject } from 'rxjs';
import { SharedModule } from '../../../shared/shared.module';
import { StoreModule } from '../../../store/store.module';
import { Transaction } from '../../../store/transaction/transaction.interface';
import { mockTransactions } from '../../../store/transaction/transaction.mock';
import { TransactionService } from '../../../store/transaction/transaction.service';
import { TransactionSummaryComponent } from '../transaction-summary/transaction-summary.component';
import { TransactionViewComponent } from './transaction-view.component';

describe('TransactionViewComponent', () => {
  let component: TransactionViewComponent;
  let fixture: ComponentFixture<TransactionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionViewComponent, TransactionSummaryComponent],
      imports: [SharedModule, StoreModule, RouterTestingModule],
      providers: [
        {
          provide: TransactionService,
          useValue: {
            entities$: new BehaviorSubject<Transaction[]>(mockTransactions),
            getAll: () => undefined,
            loading$: new BehaviorSubject<boolean>(false),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get transactions on refresh and complete loading', () => {
    const complete = jest.fn();
    const getTransactions = jest.spyOn(component, 'getTransactions');
    component.handleRefresh({ target: { complete } });

    expect(getTransactions).toHaveBeenCalled();
    expect(complete).toHaveBeenCalled();
  });

  it('should get transactions when component is initialized and be visible in the DOM', () => {
    component.ngOnInit();
    fixture.detectChanges();

    const element = fixture.debugElement.query(By.css('frontend-transaction-summary'));
    expect(element).toBeTruthy();
  });
});
