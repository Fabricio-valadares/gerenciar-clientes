import { getCustomRepository } from "typeorm"
import { IDataUser, IReturnCreateUser } from "../dtos"
import { hash } from "bcryptjs"
import { UserRepo } from "../repositories/userRepo"
import { AppError } from "../../../shared/error"
class CreateServices {
    public async createServices({ name, email, password }: IDataUser): Promise<IReturnCreateUser> {
        const useRepo = getCustomRepository(UserRepo)

        const userName = await useRepo.finfByUserName(name)

        if (userName) {
            throw new AppError("Name já existe", 400)
        }

        const userEmail = await useRepo.findByEmail(email)

        if (userEmail) {
            throw new AppError("Email já existe", 200)
        }

        const hashPassword = await hash(password, 8)

        const newUser = await useRepo.createUser({ name, email, password: hashPassword })

        return {
            "id": newUser.id,
            "name": newUser.name,
            "email": newUser.email,
        }
    }
}

export { CreateServices }
