const Animal = require("./Animal");

class Squirrel extends Animal {
    constructor(name, superpower, intelligence, heart, innatepower) {
        super(name, superpower, intelligence, heart);
        this.innatepower = innatepower;
    }

    getAnimal() {
        return "Squirrel";
    }

    getInnatePower() {
        this.intelligence += 20;
        this.heart += 20;
        return "Increases Intelligence & Heart By 20";
    }
}


module.exports = Squirrel;