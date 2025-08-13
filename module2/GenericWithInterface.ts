{

    // Generic with interface

    interface Developer<T, X = null> {
        name: string,
        age: number,
        computer: {
            brand: string,
            model: string,
            releaseDate: number
        }
        smartWatch: T,
        bike?: X

    }

    const Nuzmul: Developer<{
        brand: string,
        price: number
    }> = {
        name: "sifat ahamed",
        age: 12,
        computer: {
            brand: "hp",
            model: '748hu',
            releaseDate: 8494,
        },
        smartWatch: {
            brand: "hello",
            price: 2093
        },
    }

    interface Bike {
        model: string,
        price: number,
        numberPlate: number
    }

    interface SmartWatch {
        brand: string,
        model: string,
        releaseDate: number

    }

    // Clean code er jonne opore interface ba type alias use kore declear kore nibo

    const SifatAhamed: Developer<SmartWatch, Bike> = {
        name: "Sifat Ahamed",
        age: 85,
        computer: {
            brand: "apple",
            model: "appleM4",
            releaseDate: 5784
        },
        smartWatch: {
            brand: "apple",
            model: "Me4",
            releaseDate: 859
        }
        ,
        bike: {
            model: "yemaha",
            price: 409,
            numberPlate: 564
        }
    }

    //

}