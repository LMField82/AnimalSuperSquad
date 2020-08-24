const Animal = require("./Animal");

class WereWolf extends Animal {
    constructor(type, name, superpower, strength, innatepower) {
        super(type, name, superpower, strength);
        this.innatepower = innatepower;
        this.type = "WereWolf";
    }

    getInnatePower() {
        this.strength += 50;
        return "Increases Strength By 50";
    }
}


module.exports = WereWolf;