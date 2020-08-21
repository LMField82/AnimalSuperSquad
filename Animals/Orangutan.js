const Animal = require("./Animal");

class Orangutan extends Animal {
    constructor(name, superpower, strength, intelligence, heart, innatepower) {
        super(name, superpower, strength, intelligence, heart);
        this.innatepower = innatepower;
    }

    getAnimal() {
        return "Orangutan";
    }

    getInnatePower() {
        this.intelligence += 50;
        this.heart += 50;
        return "Increases Intelligence & Heart By 50";
    }
}


module.exports = Orangutan;