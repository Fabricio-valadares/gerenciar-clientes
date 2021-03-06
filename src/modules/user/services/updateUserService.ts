import { UserRepo } from "../repositories/userRepo"
import { getCustomRepository } from "typeorm"
import { IUpdateData, IDataReturnUpdate } from "../dtos"
import { AppError } from "../../../shared/error"
import { hash } from "bcryptjs"

class UpdateUserService {
    public async upadateUser({ id, name, cpf, email, password }: IUpdateData): Promise<IDataReturnUpdate> {
        const useRepo = getCustomRepository(UserRepo)

        const user = await useRepo.findByUserId(id)

        if (!user) {
            throw new AppError("User not exists", 400)
        }
        const currentPassword = password !== undefined ? password : user.password

        const passwordHash = await hash(currentPassword, 8)

        user.name = name !== undefined ? name : user.name
        user.email = email !== undefined ? email : user.email
        user.cpf = cpf !== undefined ? cpf : user.cpf
        user.password = password !== undefined ? passwordHash : user.password

        await useRepo.save(user)

        return {
            "name": user.name,
            "email": user.email
        }
    }
}

export { UpdateUserService }
