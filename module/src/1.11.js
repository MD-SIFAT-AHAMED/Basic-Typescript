"use strict";
var _a, _b;
{
    // Ternary operator || optional chaining || nullish coalescing
    const age = 18;
    const isAdult = age >= 18 ? "adult" : 'not adult';
    console.log({ isAdult });
    const isAuthentication = undefined;
    const reslut1 = isAuthentication !== null && isAuthentication !== void 0 ? isAuthentication : "hey lovely developer";
    console.log({ reslut1 });
    const user = {
        name: 'sifat',
        info: {
            address: 'dha',
            parmanentAddress: 'hda'
        }
    };
    const presentAddess = (_b = (_a = user === null || user === void 0 ? void 0 : user.info) === null || _a === void 0 ? void 0 : _a.presentAddess) !== null && _b !== void 0 ? _b : 'i have no present address';
    console.log({ presentAddess });
}
