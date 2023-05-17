import fs from 'fs';

export class JsonHandler {
  constructor() {}

  static read(filename) {
    try {
      return JSON.parse(fs.readFileSync(filename, 'utf-8'));
    } catch (e) {
      console.log(e);
      return {};
    }
  }

  static write(filename, obj) {
    try {
      let data = JSON.stringify(obj);
      fs.writeFileSync(filename, data);
    } catch (e) {
      console.log(e);
    }
  }

  static delete(filename) {
    try {
      fs.unlinkSync(filename);
    } catch (e) {
      console.log(e);
    }
  }
}
