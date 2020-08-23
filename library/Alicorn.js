const Animal = require("./Animal");

class Alicorn extends Animal {
    constructor(name, superpower, strength, innatepower) {
        super(name, superpower, strength);
        this.innatepower = innatepower;
    }

    getAnimal() {
        return "Alicorn";
    }

    getInnatePower() {
        this.strength += 50;
        return "Increases Strength By 50";
    }
}


module.exports = Alicorn;