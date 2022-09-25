import GameSavingLoader from './GameSavingLoader.js';

GameSavingLoader.load()
  .then((saving) => {
    // console.log(saving)
    console.log(saving);
  })
  .catch((err) => {
    console.log(err.toString());
  });
