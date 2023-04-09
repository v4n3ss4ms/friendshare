import { GetRandomNumber } from './get-random-number';

const getRandomNumber: GetRandomNumber = new GetRandomNumber();
const MIN_RANGE = 100;
const MAX_RANGE = 9999;
describe('GetRandomNumber', () => {
  it('should return number between 100 and 9999', () => {
    const num: number = getRandomNumber.execute();
    expect(num).toBeGreaterThan(MIN_RANGE);
    expect(num).toBeLessThan(MAX_RANGE);
  });
});
