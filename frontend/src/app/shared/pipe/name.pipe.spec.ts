import { NamePipe } from './name.pipe';

describe('NamePipe', () => {
  let pipe: NamePipe;

  beforeEach(() => {
    pipe = new NamePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return Unknown when value is not present', () => {
    expect(pipe.transform(undefined)).toStrictEqual('Unknown');
  });

  it('should return name if value is present', () => {
    expect(pipe.transform('Rabobank')).toStrictEqual('Rabobank');
  });
});
