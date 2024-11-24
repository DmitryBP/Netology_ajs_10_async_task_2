/* eslint-disable no-unused-vars */

import Bowman from "./classes/Characters/Bowman";
import Character from "./classes/Characters/ParentClasses/Character";
import Daemon from "./classes/Characters/Daemon";
import Magician from "./classes/Characters/Magician";
import Phonecontrol from "./classes/Phonecontrol";
import Settings from "./classes/Settings";
import Swordsman from "./classes/Characters/Swordsman";
import Team from "./classes/Team";
import Undead from "./classes/Characters/Undead";
import Validator from "./classes/Validator";
import Zombie from "./classes/Characters/Zombie";
import ArrayBufferConverter from "./classes/ArrayBufferConverter";
import GameSavingLoader from "./classes/SaveGame/GameSavingLoader";

// GameSavingLoader.load()

GameSavingLoader.load().then((saving) => {
  console.log(saving);
  // saving объект класса GameSaving
}, (error) => {
  console.log(error);
});