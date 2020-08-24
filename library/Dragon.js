const Animal = require("./Animal");

class Dragon extends Animal {
    constructor(type, name, superpower, strength, intelligence, innatepower) {
        super(type, name, superpower, strength, intelligence);
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