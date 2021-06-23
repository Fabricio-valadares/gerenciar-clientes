
interface IDataUser {
    name: string;
    email: string;
    password: string;
}

interface IReturnCreateUser {
    id: string;
    name: string;
    email: string;
}

export { IDataUser, IReturnCreateUser }
