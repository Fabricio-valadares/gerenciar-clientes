import { UserRepo } from "../repositories/userRepo"
import { getCustomRepository } from "typeorm"
import { AppError } from "../../../shared/error"

class DeleteUserService {
    public async deteleUser(id: string): Promise<void> {
        const useRepo = getCustomRepository(UserRepo)

        const user = useRepo.findByUserId(id)

        if (!user) {
            throw new AppError("User not Exists", 400)
        }

        try {

            await useRepo.deleteUser(id)
        } catch {
            throw new AppError("Id invalid", 400);
            
        }
    }
}

export { DeleteUserService }
