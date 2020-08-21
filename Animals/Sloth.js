const Animal = require("./Animal");

class Sloth extends Animal {
    constructor(name, superpower, strength, intelligence, heart, innatepower) {
        super(name, superpower, strength, intelligence, heart);
        this.innatepower = innatepower;
    }

    getAnimal() {
        return "Sloth";
    }

    getInnatePower() {
        this.heart += 50;
        return ("Increases Heart By 50");
    }
}


module.exports = Sloth;