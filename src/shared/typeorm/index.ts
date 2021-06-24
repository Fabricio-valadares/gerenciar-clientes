import { createConnection, Connection } from "typeorm"

export const connectdb = async (): Promise<Connection> => {
    
    return createConnection()
}
