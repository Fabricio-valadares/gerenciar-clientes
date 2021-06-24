import { Request, Response, NextFunction } from "express"
import { UserRepo } from "../../../modules/user/repositories/userRepo"
import { getCustomRepository } from "typeorm"
import { AppError } from "../../error"

export const verifyUserAdmin = async (request: Request, response: Response, next: NextFunction) => {
    const { id } = request.user

    const useRepo = getCustomRepository(UserRepo)
    
    const user = await useRepo.findByUserId(id)

    if (!user?.isAdmin) {
        throw new AppError("User not admin", 400)
    }

    return next()
}