import { UserEntitie } from "../typeorm/entities/userEntitie"

interface IDataUser {
    id?: string;
    name: string;
    email: string;
    password: string;
    isAdmin?: boolean;
    created_at?: Date
}

interface IDataUserFinal {
    id: string;
    name: string;
    email: string;
    isAdmin?: boolean; 
    
}
interface IReturnOneUser {
    user: {
        name: string;
        email: string;
    }
}

interface IReturnCreateUser {
    id: string;
    name: string;
    email: string;
}

interface IUpdateData {
    id: string;
    name?: string;
    email?: string;
    password?: string;
}

interface IDataReturnUpdate {
    name: string;
    email: string
}

interface IDataDeleteUser {
    user: UserEntitie
}

export { IDataUser, IReturnCreateUser, IDataUserFinal, IReturnOneUser, IUpdateData, IDataReturnUpdate, IDataDeleteUser }
