import Fighter from "Fighter";

export async function fight(firstFighter, secondFighter, ...points) {
  points.some(function(point) {
    firstFighter.hit(secondFighter, point);
    if (secondFighter.getHealt() < 0) {
      console.log(secondFighter.getName());
      secondFighter.knockout().then(function(result) {
        console.log(
          "GAME OVER! Winner=" +
            firstFighter.getName() +
            " WICH " +
            firstFighter.getHealt() +
            " Healt; Loser=" +
            secondFighter.getName() +
            " WICH " +
            secondFighter.getHealt() +
            " Healt."
        );
      });
      return true;
    }
    const fight = firstFighter;
    firstFighter = secondFighter;
    secondFighter = fight;
    return false;
  });
}