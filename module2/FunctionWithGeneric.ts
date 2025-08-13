{


    // Generic with function

    const createArray = (param: string): string[] => {
        return [param]
    }

    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param]
    }

    type User = { id: number, name: string }

    const res1 = createArray("Bangladesh")
    const res2 = createArrayWithGeneric<User>({ id: 22, name: "sifat" })


    const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2]
    }

    const user10 = createArrayWithTuple<string, number>("sifat", 895)


    const AddCourseToStudent = <T>(student: T) => {
        const course = "Next level web development";
        return {
            ...student,
            course
        }
    }

    const AhamedSifat = AddCourseToStudent({ name: "sifat", email: "a@gmail.com", devtype: "beginner" })


}