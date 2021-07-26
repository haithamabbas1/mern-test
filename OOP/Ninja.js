class Ninja {
    constructor(name, health, speed, strength) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    
    sayName() {
        console.log(this.name);
    }
    showStats() {
        console.log(this.name, this.strength, this.speed, this.health);
    }
    drinkShake() {
        this.health+=10;
    }
      
}
 

const ninja1 = new Ninja("Adam Dalba5", 100);

ninja1.drinkShake();
ninja1.sayName();
ninja1.showStats();  