import { UserForgotPasswordRepo } from "../repositories/userForgotPassword"
import { UserRepo } from "../../user/repositories/userRepo"
import { IDataChange } from "../dtos"
import { getCustomRepository } from "typeorm"
import { isAfter, addHours } from "date-fns"
import { hash } from "bcryptjs"
import { AppError } from "../../../shared/error"

class ChangePasswordUserRepo {
    public async changePassword({ token, password }: IDataChange): Promise<void> {
        const useRepo = getCustomRepository(UserRepo)
        const useForgotRepo = getCustomRepository(UserForgotPasswordRepo)

        const userToken = await useForgotRepo.findByToken(token)

        if (!userToken) {
            throw new AppError("User Token not exist", 400)
        }

        const user = await useRepo.findByUserId(userToken.user_id)

        if (!user) {
            throw new AppError("User not exists", 400)
        }

        const validToken = addHours(userToken.created_at, 2)

        if (isAfter(Date.now(), validToken)) {
            throw new AppError("Token expires", 400)
        }

        user.password = await hash(password, 8)

        await useRepo.save(user)

    }
}

export { ChangePasswordUserRepo }
