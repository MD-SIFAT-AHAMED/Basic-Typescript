"use strict";
{
    //
    // Type assertion
    // amar theke tumi besi bujo . That means type script theke ami nije jodi valo type bujte pari setai type assertion
    let anything;
    anything = "I am sifat";
    anything; // ta hole akhane string ar suggetion dicche
    const kgToKilo = (num) => {
        if (typeof (num) === 'string') {
            const convertedValue = parseFloat(num) * 1000;
            return `The converted value is : ${convertedValue}`;
        }
        if (typeof (num) === 'number') {
            return num * 1000;
        }
    };
    const result1 = kgToKilo(100);
    const result2 = kgToKilo("2999");
    try {
    }
    catch (err) {
        console.log(err.message);
    }
    //
}
