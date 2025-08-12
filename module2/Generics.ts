{

    // je kono somoy amra type toiri korte pari avong reuse korte pari tai holo generic type data

    //Generic type

    type GenericArray<T> = Array<T>;

    // const rollNumer: number[] = [10, 20, 30];
    const rollNumer: GenericArray<number> = [10, 20, 30];


    // const mentors: string[] = ['mr-x', 'ms-y'];
    const mentors: GenericArray<string> = ['mr-x', 'ms-y'];


    // const boolArray: boolean[] = [true, false, true]
    const boolArray: GenericArray<boolean> = [true, false, true]


    // array of object er khetre object params pathabo na , Borong argument declar kore dibo type

    const user: GenericArray<{ name: string, age: number }> = [
        {
            name: "soifat",
            age: 20

        },
        {
            name: "sajid",
            age: 48
        }
    ]


    // Generic tuple

    type GenericTuple<X, Y> = [X, Y]

    // const manus: [string, string] = ['sifat', 'rofiq']
    const manus: GenericTuple<string, string> = ['sifat', 'rofiq']
    const userWithEmail: GenericTuple<number, { name: string, email: string }> = [13934, { name: "sifat", email: "a@gmail.com" }]


}