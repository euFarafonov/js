import {Fighter} from "./fighter";
import {ImprovedFighter} from "./improvedFighter";

export async function Fight(fighter1, fighter2, ...points) {
    points.forEach(function(point) {
        fighter1.hit(fighter2, point);
        
        if (fighter2.getHealth() <= 0) {
            fighter2.knockout()
                .then(function() {
                    console.log("Game over! Win = " + fighter1.getName());
            });
            return false;
        }
        
        let temp = fighter1;
        fighter1 = fighter2;
        fighter2 = temp;
    });
}