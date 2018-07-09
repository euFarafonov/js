//import "babel-polyfill";

import Fighter from "Fighter";
import ImprovedFighter from "ImprovedFighter";
import Fight from "Fight";

let fighter = new Fighter("fighter1", 100, 10);
let iFighter = new ImprovedFighter("iFighter", 100, 20);

fight(fighter, iFighter, 5, 10, 15);