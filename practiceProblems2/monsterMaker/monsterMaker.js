import fs from 'fs';
const animalText = fs.readFileSync('../animals.txt').toString().toLowerCase().split('\n').slice(1);


class Animal {
    constructor(animalname, numlegs, sound) {
      this.animalname = animalname;
      this.numLegs = numlegs;
      this.sound = sound;
    }
  }
  
  const animals = animalText.map((row) => {
    const [animalname, , numlegs, sound] = row.split(',');
    return new Animal(animalname, parseInt(numlegs), sound);
  });
  
  class Monster {
    constructor(name, sound) {
      this.name = name;
      this.sound = sound;
    }
  
    //Method that takes in an array of animals and returns an array of all Monsters that can be made with a given number of legs
    static createAllMonsters(animals, numLegs) {
      let validAnimals = animals.filter((animal) => animal.numLegs === numLegs);
      return validAnimals.flatMap((headAnimals) =>
        validAnimals.filter((bodyAnimals) => headAnimals !== bodyAnimals).map((bodyAnimals) => new Monster(headAnimals.animalname + bodyAnimals.animalname, headAnimals.sound + bodyAnimals.sound))
      );
    }
  
    static getRandomMonster(animals, numLegs) {
      let allMonsters = Monster.createAllMonsters(animals, numLegs);
      let randomIndex = Math.floor(Math.random() * allMonsters.length);
      return allMonsters[randomIndex];
    }
  }
  
  let monsterz = Monster.createAllMonsters(animals, 4);
  console.log(monsterz);
  let randomMonsterz = Monster.getRandomMonster(animals, 8);
  console.log(randomMonsterz);


const parseAnimalz = (array) => {
  // Initialize an empty array to store the animal objects
  let animals = [];
  // Iterate through each row of the input array
  for (const rows of array) {
    // Use destructuring assignment to extract the animal name, number of legs, and sound
    // from the current row, and assign them to variables with the same names
    const [animalname, , numlegs, sound] = rows.split(',');
    // Create a new Animal object with the extracted data, and push it to the animals array
    animals.push(new Animalz(animalname, parseInt(numlegs), sound));
  }
  // Return the array of animal objects
  return animals;
};

class Animalz {
  constructor(animalname, numlegs, sound) {
    this.animalname = animalname;
    this.numLegs = numlegs;
    this.sound = sound;
  }
}

class Monsterz {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
}

const createAllMonsters = (numLegs) => {
  // Use the parseAnimals function to create an array of Animal objects from the animalText file
  let allAnimals = parseAnimalz(animalText);
  // Filter the array to only include animals with the specified number of legs
  let validAnimals = allAnimals.filter((animal) => animal.numLegs === numLegs);
  // Create a new set to store the unique Monster objects
  let monsters = new Set();
  // Iterate through the validAnimals array and create a new Monster object for each combination of animals
  for (let i = 0; i < validAnimals.length; i++) {
    for (let j = 0; j < validAnimals.length; j++) {
      if (i !== j) {
        // Concatenate the animal names and sounds to create the Monster's name and sound
        let name = validAnimals[i].animalname + validAnimals[j].animalname;
        let sound = validAnimals[i].sound + validAnimals[j].sound;
        // Add the new Monster object to the set
        monsters.add(new Monsterz(name, sound));
      }
    }
  }
  // Convert the set to an array and return it
  return Array.from(monsters);
};

const getRandomMonster = (numLegs) => {
  // Get all monsters with the specified number of legs
  let allMonsters = createAllMonsters(numLegs);
  // Generate a random number between 0 and the length of the allMonsters array
  let randomIndex = Math.floor(Math.random() * allMonsters.length);
  // Return the monster at the randomly generated index
  return allMonsters[randomIndex];
};

console.log(getRandomMonster(4));
console.log(createAllMonsters(8));

const parseAnimals = (array) => {
  // Use the map function to create an array of animal objects from the input array
  let animals = array.map((row) => {
    // Use destructuring assignment to extract the animal name, number of legs, and sound
    // from the current row, and assign them to variables with the same names
    const [animalname, , numlegs, sound] = row.split(',');
    // Return a new Animal object with the extracted data
    return new Animal(animalname, parseInt(numlegs), sound);
  });
  // Return the array of animal objects
  return animals;
};

class Anima {
  constructor(animalname, numlegs, sound) {
    this.animalname = animalname;
    this.numLegs = numlegs;
    this.sound = sound;
  }
}

class Monsta {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  //Method that takes in an array of animals and returns an array of all Monsters that can be made with a given number of legs
  static createAllMonsters(animals, numLegs) {
    let validAnimals = animals.filter((animal) => animal.numLegs === numLegs);
    return validAnimals.flatMap((headAnimals) =>
      validAnimals.filter((bodyAnimals) => headAnimals !== bodyAnimals).map((bodyAnimals) => new Monsta(headAnimals.animalname + bodyAnimals.animalname, headAnimals.sound + bodyAnimals.sound))
    );
  }

  static getRandomMonster(animals, numLegs) {
    let allMonsters = Monsta.createAllMonsters(animals, numLegs);
    let randomIndex = Math.floor(Math.random() * allMonsters.length);
    return allMonsters[randomIndex];
  }
}

let animal = parseAnimals(animalText);
let monster = Monster.createAllMonsters(animal, 8);
console.log(monster);
let randoMonster = Monster.getRandomMonster(animal, 8);
console.log(randoMonster);

class Animale {
  constructor(animalname, numlegs, sound) {
    this.animalname = animalname;
    this.numLegs = numlegs;
    this.sound = sound;
  }
}

const anima = animalText.map((row) => {
  const [animalname, , numlegs, sound] = row.split(',');
  return new Animale(animalname, parseInt(numlegs), sound);
});

class Monstera {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  //Method that takes in an array of animals and returns an array of all Monsters that can be made with a given number of legs
  static createAllMonsters(animals, numLegs) {
    let validAnimals = animals.filter((animal) => animal.numLegs === numLegs);
    return validAnimals.flatMap((headAnimals) =>
      validAnimals.filter((bodyAnimals) => headAnimals !== bodyAnimals).map((bodyAnimals) => new Monstera(headAnimals.animalname + bodyAnimals.animalname, headAnimals.sound + bodyAnimals.sound))
    );
  }

  static getRandomMonster(animals, numLegs) {
    let allMonsters = Monstera.createAllMonsters(animals, numLegs);
    let randomIndex = Math.floor(Math.random() * allMonsters.length);
    return allMonsters[randomIndex];
  }
}

let monsters = Monstera.createAllMonsters(anima, 4);
console.log(monsters);
let randomMonster = Monstera.getRandomMonster(anima, 8);
console.log(randomMonster);
