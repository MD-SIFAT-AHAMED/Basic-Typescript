{

    // Inheritance  --OOP
    class Person {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address
        }

        getSleep(numOfHours: number) {
            console.log(`${this.name} will sleep for ${numOfHours}`);
        }

    }

    class Student extends Person {
        constructor(name: string, age: number, address: string) {
            super(name, age, address)
        }
    }

    class Teacher extends Person {
        degisnation: string;
        constructor(name: string, age: number, address: string, degisnation: string) {
            super(name, age, address);
            this.degisnation = degisnation;
        }
        takeClass(numOfClass: number) {
            console.log(`${this.name} will take ${numOfClass} class`);
        }
    }

    const teacher = new Teacher('sifat', 89, "Dhaka", 'assistan teacher');
    teacher.takeClass(10);


}