import { EntityRepository, Repository } from "typeorm"
import { UserEntitie } from "../typeorm/entities/userEntitie"
import { IDataCreateUser } from "../dto"

@EntityRepository(UserEntitie)
class UserRepo extends Repository<UserEntitie> {
    public async createUser({ name, email, password }: IDataCreateUser): Promise<UserEntitie> {       
        const newUser = this.create({ name, email, password })

        await this.save(newUser)

        return newUser;
    }

    public async findByEmail(email: string): Promise<UserEntitie | undefined> {
        const user = await this.findOne({ where: { email } })

        return user
    }

    public async listUser(): Promise<IDataCreateUser[]> {
        const listUser = this.find()

        return listUser
    }

}

export { UserRepo }
