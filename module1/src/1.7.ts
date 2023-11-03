{
    // spread operator
    // rest operator
    // destructuring

    // spread operator
    const bros1: string[] = ["abul", "babul", "cabul"];
    const bros2: string[] = ["tonmoy", "nahid", "rahat"];

    // bros1.push(bros2); // array can not pushable
    bros1.push(...bros2); // spread operate can push array

    const mentor1 = {
        typeScript: "mezba",
        redux: "mir",
        dbms: "mizan"
    }

    const mentor2 = {
        prisma: 'firoz',
        next: 'tonmoy',
        cloud: 'nahid',
    }

    const mentorList = {
        ...mentor1,
        ...mentor2,
    }


    // learn rest operator
    const greerFriends = (...friends: string[]) => {
        friends.forEach((friend: string) => console.log(`Hi ${friend}`))
    }

    greerFriends("Abul", "Babul", "Cabul", "Dabul")


}