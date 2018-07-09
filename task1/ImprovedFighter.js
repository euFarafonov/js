import Fighter from "Fighter";

export class ImprovedFighter extends Fighter {
	doubleHit(enemy, point) {
		super.hit(enemy, 2 * point);
	}
}