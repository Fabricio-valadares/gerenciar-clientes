import { EntityRepository, Repository } from "typeorm"
import { UserEntitie } from "../typeorm/entities/userEntitie"
import { IDataUser } from "../dto"

@EntityRepository(UserEntitie)
class UserRepo extends Repository<UserEntitie> {
    public async createUser({ name, email, password }: IDataUser): Promise<UserEntitie> {       
        const newUser = this.create({ name, email, password })

        await this.save(newUser)

        return newUser;
    }

    public async listUser(): Promise<IDataUser[]> {
        const listUser = this.find()

        return listUser
    }

    public async findByEmail(email: string): Promise<UserEntitie | undefined> {
        const user = await this.findOne({ where: { email } })

        return user
    }

}

export { UserRepo }
