import { UserForgotPasswordRepo } from "../repositories/userForgotPassword"
import { UserRepo } from "../../user/repositories/userRepo"
import { getCustomRepository } from "typeorm"
import { AppError } from "../../../shared/error"
import getenv from "getenv"
import { resolve } from "path"
import { ConfigSendEmail } from "../../../shared/mail"

class OrderNewPasswordServices {
    public async createOrderToken(email: string): Promise<void> {
        const useForgotRepo = getCustomRepository(UserForgotPasswordRepo)
        const useRepo = getCustomRepository(UserRepo)

        const user = await useRepo.findByEmail(email)

        if (!user) {
            throw new AppError("User email not exists", 400)
        }

        const newUserToken = await useForgotRepo.generate(user.id)

        const pathString = resolve(__dirname, "..", "..","..", "shared", "mail", "templateEmail.hbs")

        const variableData = {
            name: user.name,
            link: `${getenv("LINK_PAGE_RESET_PASSWORD")}${newUserToken.token}`
        }

        await ConfigSendEmail.sendEmail({
            to: email,
            path: pathString,
            variable: variableData
        })
    }
}

export { OrderNewPasswordServices }
