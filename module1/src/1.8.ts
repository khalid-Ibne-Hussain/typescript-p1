// destructuring
{
    const user = {
        id: 321,
        name: {
            fName: 'Mr.',
            mName: 'Abul',
            lName: 'Mia',
        },
        contactNo: '012345678',
        address: 'Bd',

    }

    const { id, name: { mName }, contactNo: phoneNumber } = user; // contactNo as phoneNumber

    // array destructuring
    const myFriends = ['Abul', 'Babul', 'Cabul', 'Dabul', 'Ebul', 'Fabul'];

    const [, , bestFriend, ...rest] = myFriends;



}