{

    // Nullable types / unknown type
    const searchName = (value: string | null) => {
        if (value) {
            console.log('searching');
        } else {
            console.log('There is noting to search')
        }
    }
    searchName("null")


    // Unknown types

    const getSpeedInMeterPerSecond = (value: unknown) => {
        if (typeof (value) === 'number') {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        }
        else if (typeof (value) === 'string') {
            const [reslut, unit] = value.split(" ");
            const convertedSpeed = (parseFloat(reslut) * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        } else {
            console.log("wrong input")
        }
    }
    getSpeedInMeterPerSecond("10 ms^-1")

    const throwError = (msg: string): never => {
        throw new Error(msg);
    }
    throwError("Muskil se error hogaya");
}