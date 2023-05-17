import { JsonHandler } from '../src/JsonHandler.js';
import { databaseData } from './fixtures/fixtures.js';

describe('Handle json file', () => {
  it('should write and read json correctly on file', () => {
    const fileName = 'test/testJsonFile.json';
    JsonHandler.write(fileName, databaseData);
    const readJson = JsonHandler.read(fileName);
    JsonHandler.delete(fileName);
    expect(readJson).toEqual(databaseData);
  });
});
