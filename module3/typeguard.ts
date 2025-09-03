{

    // Type guard

    // typeof ---> type guard

    type AlphaNumeric = string | number;

    const add = (param1: AlphaNumeric, param2: AlphaNumeric): AlphaNumeric => {
        if (typeof param1 === "number" && typeof param2 === "number") {
            return param1 + param2;
        } else {
            return param1.toString() + param2.toString();
        }
    }

    const result = add(8, 34);
    console.log(result)


    // In guard
    type normalUser = {
        name: string;
    }
    type adminUser = {
        name: string;
        role: "admin";
    }

    const getUser = (user: normalUser | adminUser) => {
        if ("role" in user) {
            console.log(`My name is ${user.name} and my role is ${user.role}`);
        } else {
            console.log(`my name is ${user.name}`);
        }
    }

    const user: normalUser = {
        name: "md sifat ahamed"
    }
    const admin: adminUser = {
        name: 'sifat admin',
        role: "admin"
    }

    getUser(admin);

}