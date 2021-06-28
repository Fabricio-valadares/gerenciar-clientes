import { Entity, Column, PrimaryColumn, CreateDateColumn } from "typeorm"
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

    @CreateDateColumn()
    created_at: Date

    @CreateDateColumn()
    updated_at: Date

    constructor() {
        if (!this.id) {
            this.id = uuidV4()
        }
    }
}

export { UserEntitie }
