{

    // Ternary operator || optional chaining || nullish coalescing
    const age: number = 18;

    const isAdult = age >= 18 ? "adult" : 'not adult'
    console.log({ isAdult })

    const isAuthentication = undefined;
    const reslut1 = isAuthentication ?? "hey lovely developer"
    console.log({ reslut1 })

    type User = {
        name: string,
        info: {
            address: string,
            parmanentAddress: string,
            presentAddess?: string
        }
    }

    const user: User = {
        name: 'sifat',
        info: {
            address: 'dha',
            parmanentAddress: 'hda'
        }
    }
    const presentAddess = user?.info?.presentAddess ?? 'i have no present address'

    console.log({ presentAddess })

}