{

    // OOP - class

    class Animal {
        // public name: string;
        // public species: string;
        // public sound: string;

        // Parameter property use korle specific vabe property likha lagbe na


        constructor(public name: string, public species: string, public sound: string) {
            // this.name = name;
            // this.species = species;
            // this.sound = species
        }

        makeSound() {
            console.log(`The ${this.name} says ${this.sound}`);
        }
    }

    const dog = new Animal("Garman Shepard Bhai", "dog", "Ghew Ghew",)
    const cat = new Animal("Parisan Bhai", "cat", "meaw meaw");

    dog.makeSound()


}