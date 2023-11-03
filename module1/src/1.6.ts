// function
// normal function
// arrow function

function add(num1: number, num2: number): number {
    return num1 + num2;
}

add(2, 3)

const addArrow = (num1: number, num2: number): number => num1 + num2;

// object -> function -> method

const User = {
    name: "abul",
    balance: 0,
    addBalance(balance: number): string {
        return `my new balance is: ${this.balance + balance}`;
    },
};


const arr: number[] = [1, 2, 3, 4];

const newArray: number[] = arr.map((elem: number): number => elem * elem)

console.log(newArray);
