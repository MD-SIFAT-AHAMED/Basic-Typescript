{
    // Mapped types

    const arryOfNumber: number[] = [1, 2, 3, 5];

    // const arrOfString: string[] = ["1","2","3","5"];

    const arrOfString: string[] = arryOfNumber.map((number) => number.toString());
    console.log(arrOfString);

    type areaOfNumber = {
        height: number,
        width: number
    }

    // type areaOfString = {
    //     height: string,
    //     width: string
    // }

    // keyof areaNumber -> "height" | "width"

    type height = areaOfNumber["height"] // look up type

    // T -> [height:string,width:number]
    //key -> T[width]

    type AreaString<T> = {
        [key in keyof T]: T[key]
    }

    const area1: AreaString<{ height: string, width: number }> = {
        height: "100",
        width: 90
    }


}