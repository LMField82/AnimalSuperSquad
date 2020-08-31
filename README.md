# AnimalSuperSquad
A Node application run in the command line that allows the user to create a squad of super-powered animals.

## How It Works
Create a squad of 3 super-powered animals from the following list:
    -Alicorn
    -Orangutan
    -Sloth
    -WereWolf
    -Dolphin
    -Hawk
    -Elephant
    -Rat
    -Squirrel
    -Snake
    -Monkey
    -Dragon

Each animal has a:
    -name - user input
    -superpower - list of choices
    The following characteristics will be attached to the specific superpower chosen:
        -strength points 
        -intelligence points 
        -heart points

### Future Plans
Compete in a battle against a randomly created animal squad to see which Animal Super Squad is dominant. 



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