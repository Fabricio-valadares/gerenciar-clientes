
interface IDataCreateUser {
    name: string;
    email: string;
    password: string;
}

interface IReturnCreateUser {
    id: string;
    name: string;
    email: string;
}

export { IDataCreateUser, IReturnCreateUser }
