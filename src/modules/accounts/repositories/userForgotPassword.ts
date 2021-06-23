import { EntityRepository, Repository } from "typeorm"
import { UserForgotTokenEntitie } from "../typeorm/entities/UserForgotToken"

@EntityRepository(UserForgotTokenEntitie)
class UserForgotPasswordRepo extends Repository<UserForgotTokenEntitie>{
    public async findByToken(token: string): Promise<UserForgotTokenEntitie | undefined> {
        const user = await this.findOne({ where: { token } })

        return user
    }

    public async generate(user_id: string): Promise<UserForgotTokenEntitie> {
        const newUserToken = this.create({ user_id })

        await this.save(newUserToken)

        return newUserToken
    }
}

export { UserForgotPasswordRepo }
