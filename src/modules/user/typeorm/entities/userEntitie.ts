import { Entity, Column, PrimaryColumn } from "typeorm"
import { v4 as uuidV4 } from "uuid"

@Entity("users")
class UserEntitie {
    @PrimaryColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string

    @Column()
    isAdmin: boolean

    constructor() {
        if (!this.id) {
            this.id = uuidV4()
        }
    }
}

export { UserEntitie }
