import { JsonHandler } from './JsonHandler.js';
import { Filters } from './Filters.js';

//Read Json file
const mock_application = JsonHandler.read('mock_application.json');

const data = {
  ...mock_application,
};

//Business logic to delete desired duplicated lists
for (let i = 0; i < data['versions'].length; i++) {
  data['versions'][i]['objects'] = Filters.getUniqueListBy(
    data['versions'][0]['objects'],
    'key'
  );
  data['versions'][i]['scenes'] = Filters.getUniqueListBy(
    data['versions'][0]['scenes'],
    'key'
  );
  for (let j = 0; j < data['versions'][i]['objects'].length; j++) {
    data['versions'][i]['objects'][j]['fields'] = Filters.getUniqueListBy(
      data['versions'][i]['objects'][j]['fields'],
      'key'
    );
  }
  for (let j = 0; j < data['versions'].length; j++) {
    data['versions'][i]['scenes'][j]['views'] = Filters.getUniqueListBy(
      data['versions'][i]['scenes'][j]['views'],
      'key'
    );
  }
}

//Created json file with clean data
JsonHandler.write('clean_application.json', data);
