{
    // Utility types

    // pick

    type Person = {
        name: string,
        age: number,
        email?: string,
        contactNo: string
    }

    type namgeAge = Pick<Person, "name" | "age">

    //Omit  picker olta mane bat deoa

    type ContactInfo = Omit<Person, "name" | "age">

    // Required

    type personRequired = Required<Person>

    // partial  required er olta sob gula ke optional kore dibe

    type PersonPartial = Partial<Person>

    // Read only

    type PersonReadonly = Readonly<Person>

    const Person1: PersonReadonly = {
        name: "sifat",
        age: 29,
        contactNo: "958"
    }

    // Person1.name = "sifat ahamed";

    // Record

    // type Myobj = {
    //     a: string,
    //     b: string
    // }

    type Myobj = Record<string, string>;
    const EmptyObj: Record<string, unknown> = {}

    const obj1: Myobj = {
        a: "sifat",
        b: "ahamed",
        cd: "hekllo"
    }


}