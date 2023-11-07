{
    // 
    // type assertion
    type User1 = {
        name: string;
        age: number;
    };

    interface User2 {
        name: string;
        age: number;
    }

    type UserWithRole1 = User1 & { role: string };
    interface UserWithRole2 extends User2 { role: string; };
    interface UserWithRole3 extends User1 { role: string; };

    const user1: UserWithRole1 = {
        name: "abul",
        age: 25,
        role: "manager",
    }
    const user2: UserWithRole2 = {
        name: "cabul",
        age: 25,
        role: "manager",
    }
    const user3: UserWithRole3 = {
        name: "babul",
        age: 26,
        role: "HR",
    }

    // _____________________________________ 
    // array
    // js->object, array->object function->

    type Roll1 = number[];

    const rollNumber1: Roll1 = [1, 2, 3];

    interface Roll2 {
        [index: number]: number
    }

    const rollNumber2: Roll2 = [4, 5, 6];

    type Add1 = (num1: number, num2: number) => number;

    interface Add2 {
        (num1: number, num2: number): number
    }

    const add: Add2 = (num1, num2) => num1 + num2;

}