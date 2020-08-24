const Animal = require("./Animal");

class Elephant extends Animal {
    constructor(type,name, superpower, strength, intelligence, heart, innatepower) {
        super(type, name, superpower, strength, intelligence, heart);
        this.innatepower = innatepower;
        this.type = "Elephant";
    }

    getInnatePower() {
        this.strength += 40;
        this.intelligence += 40;
        this.heart += 50;
        return "Increases Strength, Intelligence, & Heart By 50 🐘" 
    }
}


module.exports = Elephant;