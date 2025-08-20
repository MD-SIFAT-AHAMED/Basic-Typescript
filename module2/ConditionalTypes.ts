{

    //kono akti type er man jodi onno akti typer opor nirbol kore seitai holo conditional types

    // conditional type
    type a1 = number;
    type b1 = string;

    type x = a1 extends null ? true : false; // conditional type
    type y = a1 extends null ? true : b1 extends undefined ? undefined : any; // Nasted condition type


    type sifat = {
        bike: string,
        car: string,
        ship: string
    }

    /// keyof sifat  "bike" | "car" | "ship"

    type checkVehical<T> = T extends keyof sifat ? true : false;

    type hasCar = checkVehical<"car">


}