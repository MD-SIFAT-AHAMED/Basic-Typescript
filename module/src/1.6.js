"use strict";
{ //learn function
    //normal function
    //Arrow function
    function add(num1, num2 = 10) {
        return num1 + num2;
    }
    add(36748, 1298);
    function sum(num1, num2 = 10) {
        return num1 + num2;
    }
    sum(20, 302);
    const sumAdd = (num1, num2) => num1 * num2;
    const addArrow = (num1, num2) => num1 * num2;
    // Object --> function --> method
    const poorUser = {
        name: "sifat",
        balance: 0,
        addBalance(balance) {
            return `My new balance is : ${this.balance + balance}`;
        }
    };
    const richUser = {
        name: 'sifat',
        amount: 0,
        addAmount(amount) {
            return `My new amount is : ${this.amount + amount}`;
        }
    };
    const arr = [1, 3, 4, 5, 6];
    const newArray = arr.map((ele) => ele * ele);
    const hello = ['sifat', 'arfi'];
    const newHello = hello.map((ele) => ele);
    const nums = [10, 20, 30];
    const newNums = nums.map((num) => num * num);
    console.log(newNums);
}
