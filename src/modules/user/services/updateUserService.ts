import { UserRepo } from "../repositories/userRepo"
import { getCustomRepository } from "typeorm"
import { IUpdateData, IDataReturnUpdate } from "../dtos"
import { AppError } from "../../../shared/error"

class UpdateUserService {
    public async upadateUser({ id, name, email }: IUpdateData): Promise<IDataReturnUpdate> {
        const useRepo = getCustomRepository(UserRepo)

        const user = await useRepo.findByUserId(id)

        if (!user) {
            throw new AppError("User not exists", 400)
        }

        user.name = name !== null ? name : user.name
        user.email = email !== null ? email : user.email

        await useRepo.save(user)

        return {
            "name": user.name,
            "email": user.email
        }
    }
}

export { UpdateUserService }
