{

    class Person {
        getSleep() {
            console.log(`i am 8 hours sleeping per day`);
        }
    }

    class Student extends Person {
        getSleep() {
            console.log(`i am 7 hours sleep per day`);
        }
    }

    class Developer extends Person {
        getSleep() {
            console.log("i am 6 hours sleep per day");
        }
    }

    const person1 = new Person();
    const person2 = new Developer();
    const person3 = new Student();

    person1.getSleep();
    person3.getSleep();
    person2.getSleep();


    // Another example
    class Shape {
        getArea(): number {
            return 0;
        }
    }

    class Circel extends Shape {
        radius: number;

        constructor(radius: number) {
            super();
            this.radius = radius;
        }

        getArea(): number {
            return Math.PI * this.radius * this.radius;
        }
    }

    class Rectangle extends Shape {
        height: number;
        width: number;

        constructor(height: number, width: number) {
            super();
            this.height = height;
            this.width = width;
        }

        getArea(): number {
            return this.height * this.width;
        }
    }

    const getShapeArea = (param: Shape)=>{
        console.log(param.getArea())
    }

    const shape1 = new Shape();
    const shape2 = new Circel(20);
    const shape3 = new Rectangle(20, 20);

    getShapeArea(shape1);
    getShapeArea(shape2);
    getShapeArea(shape3);

}