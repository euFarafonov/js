export class Fighter {
	constructor(name, health, power) {
		this.name = name;
		this.health = health;
		this.power = power;
	}
	
	setDamage(damage) {
		this.health = this.health - damage;
		console.log('health = ' + this.health);
	}
	
	hit(enemy, point) {
		let damage = this.power * point;
        enemy.setDamage(damage);
	}
	
	knockout() {
		return new Promise(function(resolve, reject) {
			setTimeout(function() {
				console.log("time is over");
				resolve();
			}, 500);
		});
	}
}