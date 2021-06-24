
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

interface IUpdateData {
    id: string;
    name: string;
    email: string;
}

interface IDataReturnUpdate {
    name: string;
    email: string
}

export { IDataUser, IReturnCreateUser, IUpdateData, IDataReturnUpdate }
