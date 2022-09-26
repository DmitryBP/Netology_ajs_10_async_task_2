import json from './parser.js';
import read from './reader.js';

export default class GameSavingLoader {
  static async load() {
    try {
      console.log("Загружаю");
      let res = await read();
      console.log(res);
      let value = await json(res);
    } catch (err) {
      console.log(err.toString());
    }
  }
}
