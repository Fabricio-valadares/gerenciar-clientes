import { getCustomRepository } from "typeorm"
import { IDataCreateUser, IReturnCreateUser } from "../dto"
import { hash } from "bcryptjs"
import { UserRepo } from "../repositories/userRepo"
import { AppError } from "../../../shared/error"


class CreateServices {
    public async createServices({ name, email, password }: IDataCreateUser): Promise<IReturnCreateUser> {
        const useRepo = getCustomRepository(UserRepo)

        const user = await useRepo.findByEmail(email)

        if (user) {
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
