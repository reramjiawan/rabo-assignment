import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { StoreModule } from '../store.module';
import { TRANSACTION_DATA_CONFIG_TOKEN } from './transaction-data-config';
import { TransactionDataService } from './transaction-data.service';
import { mockTransactions, mockTransactionsApi } from './transaction.mock';

describe('TransactionDataService', () => {
  let service: TransactionDataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule, HttpClientTestingModule],
      providers: [{ provide: TRANSACTION_DATA_CONFIG_TOKEN, useValue: { root: 'http://localhost:1000/api' } }],
    });

    service = TestBed.inject(TransactionDataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have Transaction[] value when subscribing to getAll', () => {
    service.getAll().subscribe((value) => {
      expect(value).toEqual(mockTransactions);
    });

    const testRequest = httpMock.expectOne('http://localhost:1000/api/transactions/');
    expect(testRequest.request.method).toBe('GET');
    testRequest.flush(mockTransactionsApi);
  });
});
