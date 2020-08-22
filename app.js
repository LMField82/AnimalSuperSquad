const fs = require('fs');
const inquirer = require('inquirer');
const Alicorn = require('./Animals/Alicorn');
const Dolphin = require('./Animals/Dolphin');
const Dragon = require('./Animals/Dragon');
const Elephant = require('./Animals/Elephant');
const Hawk = require('./Animals/Hawk');
const Monkey = require('./Animals/Monkey');
const Orangutan = require('./Animals/Orangutan');
const Rat = require('./Animals/Rat');
const Sloth = require('./Animals/Sloth');
const Snake = require('./Animals/Snake');
const Squirrel = require('./Animals/Squirrel');
const WereWolf = require('./Animals/WereWolf');
const path = require('path');

const animalSquad = [];
const superpowersArr = [
    {
        "Mind Reading": {
            strength: 55,
            intelligence: 100,
            heart: 20
        }
    },
    {
        "Super Speed": {
            strength: 100,
            intelligence: 55,
            heart: 50
        }
    },
    {
        "Healing Power": {
            strength: 45,
            intelligence: 75,
            heart: 100
        }
    },
    {
        "Invisibility": {
            strength: 60,
            intelligence: 60,
            heart: 20
        }
    },
    {
        "Ability To Fly": {
            strength: 100,
            intelligence: 65,
            heart: 70
        }
    }
];

buildSquadMenu = () => {

    createSquad = () => {
        inquirer.prompt({
            message: "You must choose 3 animals for your squad. Choose the animal you want to include:",
            type: "list",
            choices: ["Alicorn", "Dolphin", "Dragon", "Elephant", "Hawk", "Monkey", "Orangutan", "Rat", "Sloth", "Snake", "Squirrel", "WereWolf"],
            name: "addSquadMembers"

        }).then(userChoice => {
            switch(userChoice.addSquadMembers) {
                case "Alicorn":
                    addAlicorn();
                    break;
                case "Dolphin":
                    addDolphin();
                    break;
                case "Dragon":
                    addDragon();
                    break;
                case "Elephant":
                    addElephant();
                    break;
                case "Hawk":
                    addHawk();
                    break;
                case "Monkey":
                    addMonkey();
                    break;
                case "Orangutan":
                    addOrangutan();
                    break;
                case "Rat":
                    addRat();
                    break;
                case "Sloth":
                    addSloth();
                    break;
                case "Snake":
                    addSnake();
                    break;
                case "Squirrel":
                    addSquirrel();
                    break;
                case "WereWolf":
                    addWereWolf();
                    break;
            }
        });
    }

    const addAlicorn = () => {
        inquirer.prompt([
            {
                message: "What is your Alicorn's name?",
                type: "input",
                name: "name"
            },
            {
                message: "What is your Alicorn's superpower?",
                type: "list",
                choices: ["Mind Reading", "Super Speed", "Healing Power", "Invisibility", "Ability To Fly"],
                name: "superpower"
            }
        ]).then(userChoice => {
            const alicorn = new Alicorn (userChoice.name, userChoice.superpower, strength, intelligence, heart)
            animalSquad.push(alicorn);

            createSquad();
        });
    }

    const addDolphin = () => {
        inquirer.prompt([
            {
                message: "What is your Dolphin's name?",
                type: "input",
                name: "name"
            },
            {
                message: "What is your Dolphin's superpower?",
                type: "list",
                choices: ["Mind Reading", "Super Speed", "Healing Power", "Invisibility", "Ability To Fly"],
                name: "superpower"
            }
        ]).then(userChoice => {
            const dolphin = new Dolphin (userChoice.name, userChoice.superpower, strength, intelligence, heart)
            animalSquad.push(dolphin);

            createSquad();
        });
    }

    const addDragon = () => {
        inquirer.prompt([
            {
                message: "What is your Dragon's name?",
                type: "input",
                name: "name"
            },
            {
                message: "What is your Dragon's superpower?",
                type: "list",
                choices: ["Mind Reading", "Super Speed", "Healing Power", "Invisibility", "Ability To Fly"],
                name: "superpower"
            }
        ]).then(userChoice => {
            const dragon = new Dragon (userChoice.name, userChoice.superpower, strength, intelligence, heart)
            animalSquad.push(dragon);

            createSquad();
        });
    }

    const addElephant = () => {
        inquirer.prompt([
            {
                message: "What is your Elephant's name?",
                type: "input",
                name: "name"
            },
            {
                message: "What is your Elephant's superpower?",
                type: "list",
                choices: ["Mind Reading", "Super Speed", "Healing Power", "Invisibility", "Ability To Fly"],
                name: "superpower"
            }
        ]).then(userChoice => {
            const elephant = new Elephant (userChoice.name, userChoice.superpower, strength, intelligence, heart)
            animalSquad.push(elephant);

            createSquad();
        });
    }

    const addHawk = () => {
        inquirer.prompt([
            {
                message: "What is your Hawk's name?",
                type: "input",
                name: "name"
            },
            {
                message: "What is your Hawk's superpower?",
                type: "list",
                choices: ["Mind Reading", "Super Speed", "Healing Power", "Invisibility", "Ability To Fly"],
                name: "superpower"
            }
        ]).then(userChoice => {
            const hawk = new Hawk (userChoice.name, userChoice.superpower, strength, intelligence, heart)
            animalSquad.push(hawk);

            createSquad();
        });
    }

    const addMonkey = () => {
        inquirer.prompt([
            {
                message: "What is your Monkey's name?",
                type: "input",
                name: "name"
            },
            {
                message: "What is your Monkey's superpower?",
                type: "list",
                choices: ["Mind Reading", "Super Speed", "Healing Power", "Invisibility", "Ability To Fly"],
                name: "superpower"
            }
        ]).then(userChoice => {
            const monkey = new Monkey (userChoice.name, userChoice.superpower, strength, intelligence, heart)
            animalSquad.push(monkey);

            createSquad();
        });
    }

    const addOrangutan = () => {
        inquirer.prompt([
            {
                message: "What is your Organutan's name?",
                type: "input",
                name: "name"
            },
            {
                message: "What is your Organutan's superpower?",
                type: "list",
                choices: ["Mind Reading", "Super Speed", "Healing Power", "Invisibility", "Ability To Fly"],
                name: "superpower"
            }
        ]).then(userChoice => {
            const organutan = new Organutan (userChoice.name, userChoice.superpower, strength, intelligence, heart)
            animalSquad.push(organutan);

            createSquad();
        });
    }

    const addRat = () => {
        inquirer.prompt([
            {
                message: "What is your Rat's name?",
                type: "input",
                name: "name"
            },
            {
                message: "What is your Rat's superpower?",
                type: "list",
                choices: ["Mind Reading", "Super Speed", "Healing Power", "Invisibility", "Ability To Fly"],
                name: "superpower"
            }
        ]).then(userChoice => {
            const rat = new Rat (userChoice.name, userChoice.superpower, strength, intelligence, heart)
            animalSquad.push(rat);

            createSquad();
        });
    }

    const addSloth = () => {
        inquirer.prompt([
            {
                message: "What is your Sloth's name?",
                type: "input",
                name: "name"
            },
            {
                message: "What is your Sloth's superpower?",
                type: "list",
                choices: ["Mind Reading", "Super Speed", "Healing Power", "Invisibility", "Ability To Fly"],
                name: "superpower"
            }
        ]).then(userChoice => {
            const sloth = new Sloth (userChoice.name, userChoice.superpower, strength, intelligence, heart)
            animalSquad.push(sloth);

            createSquad();
        });
    }

    const addSnake = () => {
        inquirer.prompt([
            {
                message: "What is your Snake's name?",
                type: "input",
                name: "name"
            },
            {
                message: "What is your Snake's superpower?",
                type: "list",
                choices: ["Mind Reading", "Super Speed", "Healing Power", "Invisibility", "Ability To Fly"],
                name: "superpower"
            }
        ]).then(userChoice => {
            const snake = new Snake (userChoice.name, userChoice.superpower, strength, intelligence, heart)
            animalSquad.push(snake);

            createSquad();
        });
    }

    const addSquirrel = () => {
        inquirer.prompt([
            {
                message: "What is your Squirrel's name?",
                type: "input",
                name: "name"
            },
            {
                message: "What is your Squirrel's superpower?",
                type: "list",
                choices: ["Mind Reading", "Super Speed", "Healing Power", "Invisibility", "Ability To Fly"],
                name: "superpower"
            }
        ]).then(userChoice => {
            const squirrel = new Squirrel (userChoice.name, userChoice.superpower, strength, intelligence, heart)
            animalSquad.push(squirrel);

            createSquad();
        });
    }

    const addWereWolf = () => {
        inquirer.prompt([
            {
                message: "What is your WereWolf's name?",
                type: "input",
                name: "name"
            },
            {
                message: "What is your WereWolf's superpower?",
                type: "list",
                choices: ["Mind Reading", "Super Speed", "Healing Power", "Invisibility", "Ability To Fly"],
                name: "superpower"
            }
        ]).then(userChoice => {
            const werewolf = new WereWolf (userChoice.name, userChoice.superpower, strength, intelligence, heart)
            animalSquad.push(werewolf);

            createSquad();
        });
    }

}

buildSquadMenu();