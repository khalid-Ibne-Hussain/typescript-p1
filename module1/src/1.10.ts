{
    // union types
    type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper';
    type FullStackDeveloper = 'frontEnd' | 'expertDeveloper';

    type Developer = FrontendDeveloper | FullStackDeveloper;

    const newDeveloper: FrontendDeveloper = 'juniorDeveloper';

    type User = {
        name: string;
        email?: string;
        gender: "male" | "female";
        bloodGroup: "O+" | "A+" | "AB+";
    }

    const user1: User = {
        name: "Abul",
        gender: "male",
        bloodGroup: 'O+',
    }

    // intersection 
    type FrontEnd = {
        skills: string[];
        designation1: 'FrontEnd Dev';
    }
    type BackEnd = {
        skills: string[];
        designation2: 'BackEnd Dev';
    }

    type FullStackDev = FrontEnd & BackEnd;

    const fullStackDev: FullStackDev = {
        skills: ['HTML', 'CSS', 'Express'],
        designation1: 'FrontEnd Dev',
        designation2: 'BackEnd Dev',
    }

}