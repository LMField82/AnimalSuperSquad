const Animal = require("./Animal");

class Elephant extends Animal {
    constructor(name, superpower, strength, intelligence, heart, innatepower) {
        super(name, superpower, strength, intelligence, heart);
        this.innatepower = innatepower;
    }

    getAnimal() {
        return "Elephant"
    }

    getInnatePower() {
        this.strength += 50;
        this.intelligence += 50;
        this.heart += 50;
        return "Increases Strength, Intelligence, & Heart By 50 🐘" 
    }
}


module.exports = Elephant;