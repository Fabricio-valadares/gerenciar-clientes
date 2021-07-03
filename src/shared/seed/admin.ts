import { connectdb } from "../typeorm"
import { v4 as uuidV4 } from "uuid"
import { hash } from "bcryptjs"

const createUserAdmin = async () => {
    const connect = await connectdb()

    const userAdminId = uuidV4()
    const passwordAdmin = await hash("mind1234", 8)

    await connect.query(`
        INSERT INTO users(id, name, email, cpf, password, "isAdmin", "created_at", "updated_at")
        VALUES ('${userAdminId}', 'mindAdmin', 'mindcontato@mind.com.br', '01029343212', '${passwordAdmin}', true, 'now()', 'now()')
    `)
}

createUserAdmin().then(() => console.log("User Admin create !"))
