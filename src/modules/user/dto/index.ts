
interface IDataUser {
    name: string;
    email: string;
    password: string;
}

interface IDataLoginRequest {
    email: string;
    password: string;
}

interface IReturnCreateUser {
    id: string;
    name: string;
    email: string;
}

interface IDataLogin {
    token: string;
}

export { IDataUser, IReturnCreateUser, IDataLogin, IDataLoginRequest }
