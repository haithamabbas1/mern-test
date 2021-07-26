class Ninja{
    constructor(name){
        this.name=name;
        this.health=50;
        this.speed=3;
        this.strenth=3;
        }
        sayName(){
            console.log(`ninja's name is  ${this.name}`)

        }
        showStats(){
            console.log(`ninja's name is ${this.name}\nthe strength of ninja is ${this.strenth}\nthe speed of ninja is ${this.speed}\nthe health of ninja is ${this.health}`)
           

        } 

        drinkSake(){
            this.health+=10
        }

}
class Sensei extends Ninja {
    constructor(name){  
        super(name);
        this.health=200;
        this.speed=10;
        this.strength=10
        this.wisdom=10;
    }
    speakWisdom(){
        
this.drinkSake();
console.log(`the wisdom of ninja is ${this.wisdom}`)

    }
}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();

superSensei.showStats();
