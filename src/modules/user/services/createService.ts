import { getCustomRepository } from "typeorm"
import { IDataUser, IReturnCreateUser } from "../dtos"
import { hash } from "bcryptjs"
import { UserRepo } from "../repositories/userRepo"
import { AppError } from "../../../shared/error"
class CreateServices {
    public async createServices({ name, email, password }: IDataUser): Promise<IReturnCreateUser> {
        const useRepo = getCustomRepository(UserRepo)

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

// "nome": "cccc",
// 	"email": "vini@gmail.com",
// 	"cpf": "1235452562",
// 	"acesso": 1,
// 	"senha": "123",
// 	"nivel": 999

// validação email e cpf

export { CreateServices }
