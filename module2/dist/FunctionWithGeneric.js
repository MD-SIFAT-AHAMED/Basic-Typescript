"use strict";
{
    // Generic with function
    const createArray = (param) => {
        return [param];
    };
    const createArrayWithGeneric = (param) => {
        return [param];
    };
    const res1 = createArray("Bangladesh");
    const res2 = createArrayWithGeneric({ id: 22, name: "sifat" });
    const createArrayWithTuple = (param1, param2) => {
        return [param1, param2];
    };
    const user10 = createArrayWithTuple("sifat", 895);
    const AddCourseToStudent = (student) => {
        const course = "Next level web development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const AhamedSifat = AddCourseToStudent({ name: "sifat", email: "a@gmail.com", devtype: "beginner" });
}
