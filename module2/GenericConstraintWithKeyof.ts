{
    // Generic constraint with keyof operator

    type vehical = {
        car: string,
        bike: string,
        ship: string
    }

    type owner = "bike" | "car" | "ship"; // Manually

    type owner2 = keyof vehical;

    const user = {
        name: "sifat ahamed",
        age: 33
    }

    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key];
    }

    const result = getPropertyValue(user, "age")


    const AddValue = <X, Q extends keyof X>(obj: X, key: Q) => {
        return obj[key]
    }

    const salary = {
        name: "sifat",
        salary: 20934
    }

    const sifat = AddValue(salary, "name")


}