import { DatePipe } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IonicModule } from '../../../ionic/ionic.module';
import { ConvertCurrencyPipe } from '../../../shared/pipe/convert-currency.pipe';
import { SharedModule } from '../../../shared/shared.module';
import { mockTransaction } from '../../../store/transaction/transaction.mock';
import { TransactionComponent } from './transaction.component';

describe('TransactionComponent', () => {
  let component: TransactionComponent;
  let fixture: ComponentFixture<TransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionComponent],
      imports: [IonicModule, SharedModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionComponent);
    component = fixture.componentInstance;
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

  it('should have name text in the DOM', () => {
    component.transaction = mockTransaction;
    fixture.detectChanges();
    const element = fixture.debugElement.query(By.css('[data-test-id="name"]')).nativeElement;

    expect(element.textContent.trim()).toStrictEqual(mockTransaction.otherParty?.name);
  });

  it('should have iban text in the DOM', () => {
    component.transaction = mockTransaction;
    fixture.detectChanges();
    const element = fixture.debugElement.query(By.css('[data-test-id="iban"]')).nativeElement;

    expect(element.textContent.trim()).toStrictEqual(mockTransaction.otherParty?.iban);
  });

  it('should have timestamp text in the DOM', () => {
    component.transaction = mockTransaction;
    fixture.detectChanges();
    const element = fixture.debugElement.query(By.css('[data-test-id="timestamp"]')).nativeElement;

    expect(element.textContent.trim()).toStrictEqual(
      new DatePipe('en-US').transform(mockTransaction.timestamp, 'dd-MM-YYYY')
    );
  });

  it('should have currency text in the DOM', () => {
    component.transaction = mockTransaction;
    fixture.detectChanges();
    const element = fixture.debugElement.query(By.css('[data-test-id="currency"]')).nativeElement;

    expect(element.textContent.trim()).toStrictEqual(
      new ConvertCurrencyPipe().transform(mockTransaction.amount, mockTransaction.currencyRate)
    );
  });

  it('should have description text in the DOM', () => {
    component.transaction = mockTransaction;
    fixture.detectChanges();
    const element = fixture.debugElement.query(By.css('[data-test-id="description"]')).nativeElement;

    expect(element.textContent.trim()).toStrictEqual(mockTransaction.description);
  });
});
