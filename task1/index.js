import "babel-polyfill";
import {Fighter} from "./fighter";
import {ImprovedFighter} from "./improvedFighter";
import {Fight} from "./fight";

let fighter = new Fighter("fighter", 100, 10);
let iFighter = new ImprovedFighter("iFighter", 100, 20);

Fight(fighter, iFighter, 1, 1, 2, 2, 3, 3, 4, 4);