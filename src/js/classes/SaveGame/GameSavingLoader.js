import json from "./parser";
import read from "./reader";

export default class GameSavingLoader {
  static load() {
    return read().then((bufferData) => {
      return json(bufferData)
        .then((data) => {
          return JSON.parse(data);
        })
        .catch((e) => {
          throw new Error(`Ошибка ${e.message}`);
        });
    });
  }
}
