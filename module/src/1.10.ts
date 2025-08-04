{
    // union types

    type FrontendDeveloper = 'fakibaziDeveloper' | 'juniorDeveloper';
    type FullstackDeveloper = 'juniorDeveloper' | 'experDeveloper';

    type Developer = FrontendDeveloper | FullstackDeveloper;

    const newDeveloper: FrontendDeveloper = 'juniorDeveloper'

    type User = {
        name: string,
        email?: string,
        gander: 'male' | 'female',
        booldGroup: 'o+' | 'a+',
    }

    const user1: User = {
        name: 'sufat',
        gander: "male",
        booldGroup: 'o+'
    }

    // InterSection types

    type Frontend = {
        skill: string[],
        designation1: 'frontend Developer'
    }

    type Backend = {
        skill: string[],
        designation2: 'Backend Developer'
    }

    type Fullstack = Frontend & Backend;

    const fulstackDev: Fullstack = {
        skill: ['html', 'css', 'express'],
        designation1: 'frontend Developer',
        designation2: 'Backend Developer'
    }

}