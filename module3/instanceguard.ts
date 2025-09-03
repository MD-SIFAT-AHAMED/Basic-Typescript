{
    // instance Guard
    class Animale {
        name: string;
        species: string;

        constructor(name: string, species: string) {
            this.name = name;
            this.species = species
        }

        makeSound() {
            console.log('I am Making sound');
        }
    }

    class Dog extends Animale {
        constructor(name: string, species: string) {
            super(name, species);
        }

        makeBark() {
            console.log("i am barking");
        }
    }

    class Cat extends Animale {
        constructor(name: string, species: string) {
            super(name, species);
        }
        makeMeaw() {
            console.log("i am meawing");
        }
    }

    const dog = new Dog('jarman dog bhai', 'dog');
    const cat = new Cat('cat bhai', 'cat');

    // smart way te hanle korte caile amra function use korte pari

    const isDog = (animal: Animale) => {
        return animal instanceof Dog;
    }

    const isCat = (animale: Animale) => {
        return animale instanceof Cat;
    }

    const getAnimale = (animal: Animale) => {
        if (isDog(animal)) {
            animal.makeBark()
        } else if (isCat(animal)) {
            animal.makeMeaw()
        } else {
            animal.makeSound()
        }
    }

}