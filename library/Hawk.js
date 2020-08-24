const Animal = require("./Animal");

class Hawk extends Animal {
    constructor(type, name, superpower, intelligence, innatepower) {
        super(type, name, superpower, intelligence);
        this.innatepower = innatepower;
    }

    getAnimal() {
        return "Hawk";
    }

    getInnatePower() {
        this.intelligence += 50;
        return "Increases Intelligence By 50";
    }
}


module.exports = Hawk;