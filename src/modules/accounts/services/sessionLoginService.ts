import { getCustomRepository } from "typeorm"
import { AppError } from "../../../shared/error"
import { IDataLogin, IDataLoginRequest, ILoginFinal } from "../dtos"
import { sign } from "jsonwebtoken"
import { compare } from "bcryptjs"
import { UserRepo } from "../../user/repositories/userRepo"
import getenv from "getenv"
class SessionLoginService {
    public async verifyDataUser({ emailOrCPF, password }: IDataLoginRequest): Promise<IDataLogin> {
        const userRepo = getCustomRepository(UserRepo)

        const dataEmail = emailOrCPF.split("").includes("@")     

        if (dataEmail) {
            const user = await userRepo.findByEmail(emailOrCPF)

            if (!user) {
                throw new AppError("Email or CPF /password not exists", 400)
            }

            const tokenFinal = await this.loginFinal({ user, password })

            return tokenFinal

        } else {

            const user = await userRepo.findByCPF(emailOrCPF)

            if (!user) {
                throw new AppError("Email or CPF/password not exists", 400)
            }

            const tokenFinal = await this.loginFinal({ user, password })

            return tokenFinal
        }
    }

    private async loginFinal({ user, password }: ILoginFinal): Promise<IDataLogin> {
        const passwordCompare = await compare(password, user.password)

        if (!passwordCompare) {
            throw new AppError("Email or CPF/password not exists", 400)
        }

        const token = sign({}, getenv("SECRET_KEY_TOKEN"), {
            subject: user.id,
            expiresIn: getenv("EXPIRES_TOKEN")
        })

        return {
            token: token
        }
    }

}

export { SessionLoginService }
