import { Entity, Column, PrimaryColumn, CreateDateColumn } from "typeorm"
import { v4 as uuidV4 } from "uuid"

@Entity("user_token")
class UserForgotTokenEntitie {
    @PrimaryColumn("uuid")
    id: string;

    @Column()
    token: string

    @Column()
    user_id: string

    @CreateDateColumn()
    created_at: Date

    @CreateDateColumn()
    updated_at: Date

    constructor() {
        if (!this.id) {
            this.id = uuidV4()
        }

        if (!this.token) {
            this.token = uuidV4()
        }
    }
}

export { UserForgotTokenEntitie }
