import { getCustomRepository } from "typeorm"
import { UserRepo } from "../../user/repositories/userRepo"

class VerifyAdminInUser {
    public async verifyDataUser(id: string): Promise<boolean> {
        const useRepo = getCustomRepository(UserRepo)
    
        const user = await useRepo.findByUserId(id)

        if (user?.isAdmin) {
            return true
        }

        return false
    }
}

export { VerifyAdminInUser }
