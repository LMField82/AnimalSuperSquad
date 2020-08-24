const Animal = require("./Animal");

class Monkey extends Animal {
    constructor(type, name, superpower, heart, innatepower) {
        super(type, name, superpower, heart);
        this.innatepower = innatepower;
        this.type = "Monkey";
    }

    getInnatePower() {
        this.heart += 30;
        return "Increases Heart By 30 🐒";
    }
}


module.exports = Monkey;