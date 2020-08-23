const Animal = require("./Animal");

class WereWolf extends Animal {
    constructor(name, superpower, strength, innatepower) {
        super(name, superpower, strength);
        this.innatepower = innatepower;
    }

    getAnimal() {
        return "WereWolf";
    }

    getInnatePower() {
        this.strength += 50;
        return "Increases Strength By 50";
    }
}


module.exports = WereWolf;