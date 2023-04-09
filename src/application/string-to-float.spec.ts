import { StringToFloat } from './string-to-float';

const stringToFloat: StringToFloat = new StringToFloat();
const STRING_NUMBER = '33.56';
const FLOAT_NUMBER = 33.56;
const NO_STRING_NUMBER = 'not a number';
const ZERO = 0;
describe('StringToFloat', () => {
  it('should parse to float', () => {
    const num: number = stringToFloat.execute(STRING_NUMBER);
    expect(num).toBe(FLOAT_NUMBER);
  });

  it('should return 0 when NaN', () => {
    const num: number = stringToFloat.execute(NO_STRING_NUMBER);
    expect(num).toBe(ZERO);
  });
});
