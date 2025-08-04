{
    // Type alias

    type Student = {
        name: string,
        age: number,
        gender: string,
        contactNo?: string,
        address: string
    }

    const student1: Student = {
        name: "sifat",
        age: 5478,
        gender: "male",
        contactNo: '375834920',
        address: 'kaliganj'
    }
    const student2: Student = {
        name: 'harami',
        age: 84,
        gender: 'male',
        address: 'dha'
    }

    type IsAdmin = boolean;
    type UserName = string;

    const userName: UserName = "sifat"
    const admin: IsAdmin = true

    //type alias for function
    type Add = (x: number, y: number) => number;

    const add : Add = (num1, num2) => num1 + num2;


}