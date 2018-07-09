export class Fighter {
	constructor(name, health, power) {
		this.name = name;
		this.health = health;
		this.power = power;
	}
	
	setDamage(damage) {
		this.health = this.health - damage;
		console.log('health ' + this.name + ' = ' + this.health);
	}
	
	hit(enemy, point) {
		let damage = this.power * point;
        enemy.setDamage(damage);
	}
	
	knockout() {
		return new Promise(function(resolve) {
			setTimeout(function() {
				console.log("time is over");
				resolve();
			}, 500);
		});
	}
    
    getHealth() {
        return this.health;
    }
    
    getName() {
        return this.name;
    }
}