import GameSavingLoader from "../classes/SaveGame/GameSavingLoader";
import json from "../classes/SaveGame/parser";
import read from "../classes/SaveGame/reader";

// Замокали модули json, read
jest.mock("../classes/SaveGame/parser");
jest.mock("../classes/SaveGame/reader");

describe("GameSavingLoader", () => {
  beforeEach(() => {
    json.mockClear(); // Очистка предыдущих вызовов
  });

  const mockBuffer = new ArrayBuffer(8); // пример arraybufer. что бы убедиться что возвращаем объект нужного типа
  const mockJsonString =
    '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';

  // Указываем что должны возврощать эти фукции у нас по условию это определенные промисы
  read.mockReturnValue(Promise.resolve(mockBuffer));
  json.mockReturnValue(Promise.resolve(mockJsonString));

  test("Функция получает и возвращает данные заданного типа", () => {
    return GameSavingLoader.load().then((saving) => {
      expect(read).toHaveBeenCalled();
      expect(json).toHaveBeenCalledWith(mockBuffer);
      expect(saving).toEqual(JSON.parse(mockJsonString));
    });
  });
});
