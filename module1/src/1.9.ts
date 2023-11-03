{
    // type alias in object, string, function

    type Student = {
        name: string;
        age: number;
        gender: string;
        contactNo?: string;
        address: string;
    }

    const student1: Student = {
        name: 'Abul',
        age: 50,
        gender: "male",
        contactNo: "012345678",
        address: 'Dhaka',

    };

    const student2: Student = {
        name: 'Babul',
        age: 40,
        gender: "male",
        address: "mym",
    }

    const student3: Student = {
        name: 'Cabul',
        age: 40,
        gender: "male",
        address: "ctg",
    }

    // type declear in string;

    type UserName = string; //type
    type IsAdmin = boolean; //type

    const userName: UserName = "ABul";
    const isAdmin: IsAdmin = true;


    //  type alias in function

    type Add = (num1: number, num2: number) => number;


    const add: Add = (num1, num2) => num1 + num2




}