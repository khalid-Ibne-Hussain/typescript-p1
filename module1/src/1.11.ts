{
    // ternary operator || optional chaining || nullish coalescing operator

    const age: number = 18;

    if (age >= 18) {
        console.log('Adult');
    }
    else {
        console.log("not Adult");
    }

    // ternary operator

    const isAdult = age >= 18 ? "adult" : "not Adult"
    console.log({ isAdult });

    // nullish coalescing operator
    //  null / undefined --> decision making

    const isAuthenticated = null;
    const result1 = isAuthenticated ?? 'Guest';
    const result2 = isAuthenticated ? isAuthenticated : "Guest";

    console.log({ result1 }, { result2 });

    type User = {
        name: string;
        address: {
            city: string;
            road: string;
            presentAdd: string;
            permanentAdd?: string;
        };
    }

    const user: User = {
        name: "Abul",
        address: {
            city: "mym",
            road: "Awesome road",
            presentAdd: "mym town",
        },
    };

    const permanentAdd = user?.address?.permanentAdd ?? "No permanent Address";

    console.log({ permanentAdd });


}