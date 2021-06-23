import { UserForgotPasswordRepo } from "../repositories/userForgotPassword"
import { UserRepo } from "../../user/repositories/userRepo"
import { getCustomRepository } from "typeorm"
import { AppError } from "../../../shared/error"

class OrderNewPasswordServices {
    public async createOrderToken(email: string): Promise<void> {
        const useForgotRepo = getCustomRepository(UserForgotPasswordRepo)
        const useRepo = getCustomRepository(UserRepo)

        const user = await useRepo.findByEmail(email)

        if (!user) {
            throw new AppError("User email not exists", 400)
        }

        const newUserToken = await useForgotRepo.generate(user.id)

        console.log(newUserToken)
    }
}

export { OrderNewPasswordServices }
