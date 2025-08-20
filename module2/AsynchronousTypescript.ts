{

    // promise

    type Todo = {
        id: number,
        userId: number,
        title: string,
        completed: boolean
    }

    const getTodo = async (): Promise<Todo> => {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await res.json();
        return data
        console.log(data);
    }
    getTodo();

    //simulate

    const createPromise = (): Promise<string> => {
        return new Promise<string>((reslove, reject) => {
            const data: string = "something";
            if (data) {
                reslove(data);
            }
            else {
                reject("Failed to load data");
            }
        })
    }

    // Calling create promise funcation
    const showData = async (): Promise<string> => {
        const data: string = await createPromise();
        return data;
        console.log(data)
    }

    showData();


}