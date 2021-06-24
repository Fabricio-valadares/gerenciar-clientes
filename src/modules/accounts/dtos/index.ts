interface IDataLoginRequest {
    name: string;
    password: string;
}

interface IDataLogin {
    token: string;
}

interface IDataChange {
    token: string;
    password: string;
}

export { IDataLoginRequest, IDataLogin, IDataChange }

