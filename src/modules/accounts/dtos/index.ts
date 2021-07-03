interface IDataLoginRequest {
    emailOrCPF: string;
    password: string;
}

interface IDataLogin {
    token: string;
}

interface IDataChange {
    token: string;
    password: string;
}

interface ILoginFinal {
    password: string;
    user: any;
}

export { IDataLoginRequest, IDataLogin, IDataChange, ILoginFinal }

