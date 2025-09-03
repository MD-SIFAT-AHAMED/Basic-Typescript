{
    // Abstraction : 1; interface 2;abstract

    // abstraction moloto akta idea dey je ki gotbe kito implementation korbo tar child classe

    // Idea paoa
    interface Vehicle1 {
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }

    // Real implementation
    class Car1 implements Vehicle1 {
        startEngine(): void {
            console.log('i am starting the car engine');
        }
        stopEngine(): void {
            console.log('i am the stoping the car engine');
        }
        move(): void {
            console.log('i am moving the car');
        }
        test() {
            console.log('i am just testing');
        }
    }

    const toyotaCar = new Car1();
    toyotaCar.startEngine();

    // Abstract class

    // Idea
    abstract class Car2 {
        abstract startEngine(): void;
        abstract stopEngine(): void;
        abstract move(): void;
    }

    class Toyota extends Car2 {
        startEngine(): void {
            console.log('i am staring the car');
        }
        stopEngine(): void {
            console.log("i am stop the car");
        }
        move(): void {
            console.log('i am the move in car');
        }
    }

    const hondaCar = new Toyota();
    hondaCar.startEngine();

}