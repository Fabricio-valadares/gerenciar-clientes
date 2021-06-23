import { getCustomRepository } from "typeorm"
import { AppError } from "../../../shared/error"
import { IDataLogin, IDataLoginRequest } from "../dto"
import { sign } from "jsonwebtoken"
import { compare } from "bcryptjs"
import { UserRepo } from "../repositories/userRepo"
import getenv from "getenv"

class SessionLoginService {
    public async verifyDataUser({ email, password }: IDataLoginRequest): Promise<IDataLogin> {
        const userRepo = getCustomRepository(UserRepo)

        const user = await userRepo.findByEmail(email)

        if (!user) {
            throw new AppError("Email/password not exists", 400)
        }

        const passwordCompare = await compare(password, user.password)

        if (!passwordCompare) {
            throw new AppError("Email/password nots exists", 400)
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
