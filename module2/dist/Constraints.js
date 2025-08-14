"use strict";
{
    // constraints 
    //Mane holo kono kichu enforch kora je thaktei hobe
    const AddCourseToStudent = (student) => {
        const course = "Hello world";
        return Object.assign(Object.assign({}, student), { course });
    };
    const Stduent1 = AddCourseToStudent({ id: 89, name: "sifat ahamed", email: "z@gmail.com", isStatus: 'hi' });
    const hello = AddCourseToStudent({ id: 894, name: "sifat", email: "sifat@gmail.com", });
}
