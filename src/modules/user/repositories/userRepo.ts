import { EntityRepository, Repository } from "typeorm"
import { UserEntitie } from "../typeorm/entities/userEntitie"
import { IDataUser } from "../dtos"

@EntityRepository(UserEntitie)
class UserRepo extends Repository<UserEntitie> {
    public async createUser({ name, email, cpf, password }: IDataUser): Promise<UserEntitie> {       
        const newUser = this.create({ name, email, cpf, password })

        await this.save(newUser)

        return newUser;
    }

    public async listUser(): Promise<IDataUser[]> {
        const listUser = await this.find()

        return listUser
    }

    public async findByEmail(email: string): Promise<UserEntitie | undefined> {
        const user = await this.findOne({ where: { email } })

        return user
    }

    public async findByCPF(cpf: string): Promise<UserEntitie | undefined> {
        const user = await this.findOne({ where: { cpf } })

        return user
    }

    public async findByUserId(user_id: string): Promise<UserEntitie | undefined> {
        const user = await this.findOne(user_id)

        return user
    }

    public async finfByUserName(name: string): Promise<UserEntitie | undefined> {
        const user = this.findOne({ where: { name } })

        return user
    }

    public async deleteUser(id: string): Promise<void> {
        await this.delete(id) 
    }

}

export { UserRepo }
