const Animal = require("./Animal");

class Monkey extends Animal {
    constructor(name, superpower, heart, innatepower) {
        super(name, superpower, heart);
        this.innatepower = innatepower;
    }

    getAnimal() {
        return "Monkey";
    }

    getInnatePower() {
        this.heart += 30;
        return "Increases Heart By 30 🐒";
    }
}


module.exports = Monkey;