import { mockTransaction } from '../store/transaction/transaction.mock';
import { isoStringToDate } from './iso-string-to-date';

describe('isoStringToDate', () => {
  it('should return a Date instance when given an ISO string', () => {
    expect(isoStringToDate(mockTransaction.timestamp)).toBeInstanceOf(Date);
  });
});
