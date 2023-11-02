// reference type

const user: {
    // company: 'Solid liquid'; //type literal
    readonly company: string;
    firstName: string;
    middleName?: string; //optional type
    lastName: string;
    isMarried: boolean;
} = {
    company: 'Solid liquid',
    firstName: 'king',
    lastName: 'kong',
    isMarried: true,
}

//user.company = 'SL' //readonly so we can not modify

