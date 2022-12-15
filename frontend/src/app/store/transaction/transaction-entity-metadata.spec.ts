import { transactionEntityMetadata } from './transaction-entity-metadata';
import { mockTransaction } from './transaction.mock';

describe('Transaction Entity Metadata', () => {
  it('should selectId based on id and timestamp', () => {
    const result = transactionEntityMetadata.selectId?.(mockTransaction);

    expect(result).toStrictEqual(`${mockTransaction.id}-${mockTransaction.timestamp}`);
  });

  it('should sortCompare based on timestamp', () => {
    const mockTransaction2 = { ...mockTransaction, timestamp: '2022-12-08T10:30:47.123456' };
    const result = [mockTransaction, mockTransaction2].sort(transactionEntityMetadata.sortComparer as any);

    expect(result).toStrictEqual([mockTransaction2, mockTransaction]);
  });
});
