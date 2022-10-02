import json from './parser.js';
import read from './reader.js';

export default class GameSavingLoader {
  // eslint-disable-next-line consistent-return
  static async load() {
    try {
      console.log('Загружаю');
      const res = await read();
      const value = await json(res);
      return value;
    } catch (err) {
      console.log(err);
    }
  }
}
