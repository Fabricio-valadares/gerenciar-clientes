import { getCustomRepository } from "typeorm"
import { AppError } from "../../../shared/error"
import { IReturnOneUser } from "../dtos"
import { UserRepo } from "../repositories/userRepo"

class ListOneUserService {
    public async oneUser(id: string): Promise<IReturnOneUser> {
        const useRepo = getCustomRepository(UserRepo)

        const user = await useRepo.findByUserId(id)

        if (!user) {
            throw new AppError("User not exist", 400);
            
        }

        return {
            "user": {
                "name": user.name,
                "email": user.email
            }
        }
    }
}

export { ListOneUserService }
