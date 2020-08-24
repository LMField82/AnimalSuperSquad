const Animal = require("./Animal");

class Rat extends Animal {
    constructor(type, name, superpower, intelligence, heart, innatepower) {
        super(type, name, superpower, intelligence, heart);
        this.innatepower = innatepower;
    }

    getAnimal() {
        return "Rat";
    }

    getInnatePower() {
        this.intelligence += 30;
        this.heart += 30;
        return "Increases Intelligence By 30";
    }
}


module.exports = Rat;