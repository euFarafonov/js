import "babel-polyfill";

import {EventManager} from "./eventManager";

let eventManager = new EventManager();

eventManager.addListener("event1", function(data) {
    console.log("func1: ", data);
});

eventManager.addListener("event2", function(data) {
    console.log("func2: ", data);
});

eventManager.addListener("event1", function(data) {
    console.log("func3: ", data);
});

eventManager.dispatch("event1", "123");
console.log(eventManager);
eventManager.removeListener("event2");
console.log(eventManager);