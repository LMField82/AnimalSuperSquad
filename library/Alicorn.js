const Animal = require("./Animal");

class Alicorn extends Animal {
    constructor(type, name, superpower, strength, innatepower) {
        super(type, name, superpower, strength);
        this.innatepower = innatepower;
        this.type = "Alicorn";
    }

    getInnatePower() {
        this.strength += 50;
        return "Increases Strength By 50";
    }
}


module.exports = Alicorn;