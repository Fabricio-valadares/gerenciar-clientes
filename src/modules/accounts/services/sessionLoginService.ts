import { getCustomRepository } from "typeorm"
import { AppError } from "../../../shared/error"
import { IDataLogin, IDataLoginRequest } from "../dtos"
import { sign } from "jsonwebtoken"
import { compare } from "bcryptjs"
import { UserRepo } from "../../user/repositories/userRepo"
import getenv from "getenv"

class SessionLoginService {
    public async verifyDataUser({ name, password }: IDataLoginRequest): Promise<IDataLogin> {
        const userRepo = getCustomRepository(UserRepo)

        const user = await userRepo.finfByUserName(name)

        if (!user) {
            throw new AppError("Name/password not exists", 400)
        }

        const passwordCompare = await compare(password, user.password)

        if (!passwordCompare) {
            throw new AppError("Name/password nots exists", 400)
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
