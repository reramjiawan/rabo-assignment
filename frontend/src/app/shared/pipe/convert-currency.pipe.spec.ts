import { ConvertCurrencyPipe } from './convert-currency.pipe';

describe('ConvertCurrencyPipe', () => {
  let pipe: ConvertCurrencyPipe;

  beforeEach(() => {
    pipe = new ConvertCurrencyPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return value immediately when value is not a number', () => {
    expect(pipe.transform(undefined)).toBeUndefined();
  });

  it('should return value in EUR format when currencyRate is not present', () => {
    expect(pipe.transform(100)).toStrictEqual('€100.00');
  });

  it('should return value in converted EUR format when currencyRate is present', () => {
    expect(pipe.transform(100, 1.25)).toStrictEqual('€80.00');
  });
});
