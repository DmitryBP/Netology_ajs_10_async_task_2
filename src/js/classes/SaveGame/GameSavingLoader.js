import json from "./parser";
import read from "./reader";

export default class GameSavingLoader {
  static async load() {
    const dataBoofer = await read();
    const saving = await json(dataBoofer);
    return JSON.parse(saving);
  }
}
