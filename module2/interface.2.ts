{
    //interface holo type alias ar ulto


    //tyep alias 

    type User1 = {
        name: string,
        age: number
    }

    //interface

    interface User2 {
        name: string,
        age: number
    }


    type UserWithRole1 = User1 & { role: string }

    interface UserWithRole2 extends User2 {
        role: string
    }

    const User: UserWithRole1 = {
        name: "sifat ahamed",
        age: 90,
        role: "Admin"
    }

    const user2: UserWithRole2 = {
        name: "sifat",
        age: 90,
        role: "manager"
    }

    // Interface array er opore kaj kore

    // Js ---> object, array ---> object , function ---> object

    //Type er maddome array declaration
    type Roll = number[];

    // Interface er madddome array declaration
    interface Roll2 {
        [index: number]: number
    }

    const rollNumber1: Roll = [10, 20, 30]
    const rollNumber2: Roll2 = [50, 60, 70]

    //Type er maddome function declaration
    type Add1 = (num1: string, num2: string) => string;

    const add: Add1 = (num1, num2) => num1 + num2;

    // Interface er madddome function declaration
    interface Add2 {
        (num1: string, num2: string): string
    }

    const StringAdd: Add2 = (num1, num2) => num1 + num2;


}