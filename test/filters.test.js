import { Filters } from '../src/Filters.js';
import { duplicateData, noDuplicateData } from './fixtures/fixtures.js';

describe('Eliminate duplicates in arrays', () => {
  it('should eliminate duplicates in array', () => {
    const result = Filters.getUniqueListBy(duplicateData, 'key');
    expect(result).toEqual(noDuplicateData);
  });
});
