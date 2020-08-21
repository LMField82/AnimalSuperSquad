const Animal = require("./Animal");

class Dragon extends Animal {
    constructor(name, superpower, strength, intelligence, heart, innatepower) {
        super(name, superpower, strength, intelligence, heart);
        this.innatepower = innatepower;
    }

    getAnimal() {
        return "Dragon";
    }

    getInnatePower() {
        this.strength += 30;
        this.intelligence += 25;
        return "Increases Strength By 30, Intelligence By 25 🐉"; 
    }
}


module.exports = Dragon;