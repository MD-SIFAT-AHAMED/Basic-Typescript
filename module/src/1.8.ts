{
    // object destructuring

    const user = {
        id: 8495,
        name: {
            firstName: 'sifat',
            lastName: 'ahamed'
        },
        contactNo: '0178738475',
        address: 'uganda'
    }

    const { contactNo, name: { firstName: hello } } = user;

    // Array destructure
    const myFriends = ['chadler', "joy", 'rodd', 'sifat', 'commcoma'];
    const [a, b, bestFriends, ...rest] = myFriends;

}