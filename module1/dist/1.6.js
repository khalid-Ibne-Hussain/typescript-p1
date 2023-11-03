"use strict";
// function
// normal function
// arrow function
function add(num1, num2) {
    return num1 + num2;
}
add(2, 3);
const addArrow = (num1, num2) => num1 + num2;
// object -> function -> method
const User = {
    name: "abul",
    balance: 0,
    addBalance(balance) {
        return `my new balance is: ${this.balance + balance}`;
    },
};
const arr = [1, 2, 3, 4];
const newArray = arr.map((elem) => elem * elem);
console.log(newArray);
