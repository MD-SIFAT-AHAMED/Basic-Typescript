{//learn function
    //normal function
    //Arrow function

    function add(num1: number, num2: number = 10): number {
        return num1 + num2;
    }
    add(36748, 1298);


    const addArrow = (num1: number, num2: number): number => num1 * num2;

    // Object --> function --> method

    const poorUser = {
        name: "sifat",
        balance: 0,
        addBalance(balance: number): string {
            return `My new balance is : ${this.balance + balance}`
        }
    }

    const arr: number[] = [1, 3, 4, 5, 6];

    const newArray: number[] = arr.map((ele: number): number => ele * ele);

    const hello: string[] = ['sifat', 'arfi'];


    const newHello: string[] = hello.map((ele: string): string => ele)


}