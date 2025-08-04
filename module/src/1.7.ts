{
    //Learn spread operator

    const brose1: string[] = ['sifat', 'ahamed'];
    const brose2: string[] = ['mr', 'juabor'];

    brose1.push(...brose2)

    // console.log(brose1)

    const mentor1 = {
        gibub: 'asil',
        next: "tanmoy"
    }
    const mentor2 = {
        hd: 'il',
        nexgbt: "tmoy"
    }
    const mentor3 = {
        gibfghub: 'asifgl',
        nefgxt: "tanmfghoy"
    }
    const mentorList = {
        ...mentor1,
        ...mentor2,
        ...mentor3
    }
    console.log(mentorList)


    //learn rest operator

    const greetFriends = (...friends: string[]) => {
        friends.forEach((friend: string) => console.log(`hi ${friends}`))
    }

    greetFriends('abul', 'kabul', 'babul');
}``

