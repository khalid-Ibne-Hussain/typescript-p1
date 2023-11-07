{
    // generic type
    type GenericArray<T> = Array<T>; // parameter


    const rollNumbers: number[] = [3, 6, 8];
    const rollNumbers2: Array<number> = [3, 6, 8];
    const rollNumbers3: GenericArray<number> = [3, 6, 8];

    // ______________________________
    const mentors: string[] = ["Mr. x", "Mr. y", "Mr. z"];
    const mentors2: Array<string> = ["Mr. x", "Mr. y", "Mr. z"];
    const mentors3: GenericArray<string> = ["Mr. x", "Mr. y", "Mr. z"];

    // ______________________________
    const bollArray: boolean[] = [true, false, true];
    const bollArray2: Array<boolean> = [true, false, true];
    const bollArray3: GenericArray<boolean> = [true, false, true];

    // _______________________________ Generic Object
    const user: GenericArray<{ name: string, age: number }> = [
        {
            name: 'Abul',
            age: 100,
        },
        {
            name: "Babul",
            age: 110,
        }
    ]


    const add = (x: number, y: number) => x + y;
    add(30, 20);

    // generic tuple________________________________
    type GenericTuple<X, Y> = [X, Y]
    const manush: GenericTuple<string, string> = ['Mr. x', 'Miss. Y'];

    // type UserWithId: <X, Y >= [X, Y];
    const userWithId: GenericTuple<number, { name: string, email: string }> = [1234, { name: "Abul", email: "abul@gmail.com" }]

}