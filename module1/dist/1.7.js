"use strict";
{
    // spread operator
    // rest operator
    // destructuring
    // spread operator
    const bros1 = ["abul", "babul", "cabul"];
    const bros2 = ["tonmoy", "nahid", "rahat"];
    // bros1.push(bros2); // array can not pushable
    bros1.push(...bros2); // spread operate can push array
    const mentor1 = {
        typeScript: "mezba",
        redux: "mir",
        dbms: "mizan"
    };
    const mentor2 = {
        prisma: 'firoz',
        next: 'tonmoy',
        cloud: 'nahid',
    };
    const mentorList = Object.assign(Object.assign({}, mentor1), mentor2);
    // learn rest operator
    const greerFriends = (...friends) => {
        friends.forEach((friend) => console.log(`Hi ${friend}`));
    };
    greerFriends("Abul", "Babul", "Cabul", "Dabul");
}
