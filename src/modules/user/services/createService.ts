import { getCustomRepository } from "typeorm"
import { IDataUser, IReturnCreateUser } from "../dtos"
import { hash } from "bcryptjs"
import { UserRepo } from "../repositories/userRepo"
import { AppError } from "../../../shared/error"
class CreateServices {
    public async createServices({ name, email, cpf, password }: IDataUser): Promise<IReturnCreateUser> {
        const useRepo = getCustomRepository(UserRepo)

        const userEmail = await useRepo.findByEmail(email)

        if (userEmail) {
            throw new AppError("Email already exists", 400)
        }

        const userCPF = await useRepo.findByCPF(cpf)

        if (userCPF) {
            throw new AppError("CPF already registered", 400)
        }

        const hashPassword = await hash(password, 8)

        const newUser = await useRepo.createUser({ name, email, cpf, password: hashPassword })

        return {
            "id": newUser.id,
            "name": newUser.name,
            "email": newUser.email,
        }
    }
}

export { CreateServices }
