import GameSavingLoader from '../js/GameSavingLoader.js';

test('the data is peanut butter', async () => {
  const saving = await GameSavingLoader.load();
  expect(saving).toBe('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
});
