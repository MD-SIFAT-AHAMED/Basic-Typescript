{
    //learn function
    //normal function
    //Arrow function

    function add(num1: number, num2: number = 10): number {
        return num1 + num2;
    }
    add(36748, 1298);

    function sum(num1: number, num2: number = 10): number {
        return num1 + num2;
    }

    sum(20, 302)

    const sumAdd = (num1: number, num2: number): number => num1 * num2;


    const addArrow = (num1: number, num2: number): number => num1 * num2;

    // Object --> function --> method

    const poorUser = {
        name: "sifat",
        balance: 0,
        addBalance(balance: number): string {
            return `My new balance is : ${this.balance + balance}`
        }
    }


    const richUser = {
        name: 'sifat',
        amount: 0,
        addAmount(amount: number): string {
            return `My new amount is : ${this.amount + amount}`
        }
    }

    const arr: number[] = [1, 3, 4, 5, 6];

    const newArray: number[] = arr.map((ele: number): number => ele * ele);

    const hello: string[] = ['sifat', 'arfi'];


    const newHello: string[] = hello.map((ele: string): string => ele)

    const result: number[] = [10, 20, 30, 10];
    result.map((value: number): number => value * 2)


    const nums = [10, 20, 30];
    const newNums = nums.map((num: number): number => num * num);
    console.log(newNums)


}