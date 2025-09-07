{

    // Type assertion

    // amar theke tumi besi bujo . That means type script theke ami nije jodi valo type bujte pari setai type assertion

    let anything: any;

    anything = "I am sifat";

    (anything as string)  // ta hole akhane string ar suggetion dicche

    const kgToKilo = (num: string | number): string | number | undefined => {
        if (typeof (num) === 'string') {
            const convertedValue = parseFloat(num) * 1000;
            return `The converted value is : ${convertedValue}`;
        }
        if (typeof (num) === 'number') {
            return num * 1000;
        }
    }

    const result1 = kgToKilo(100) as number;
    const result2 = kgToKilo("2999") as string;

    type CustomError = {
        message: string
    }

    try {

    }
    catch (err) {
        console.log((err as CustomError).message)
    }

    //

}