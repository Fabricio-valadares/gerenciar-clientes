import { Request, Response, NextFunction } from "express"
import { AppError } from "../../error"
import { verify } from "jsonwebtoken"
import getenv from "getenv"

interface IDataToken {
    sub: string
}

export const verifyToken = (request: Request, response: Response, next: NextFunction) => {
    const tokenRequest = request.headers.authorization

    if (!tokenRequest) {
        throw new AppError("Token is missing", 400)
    }

    const [, token] = tokenRequest.split(" ")

    try {
        const compare = verify(token, getenv("SECRET_KEY_TOKEN"))

        const { sub } = compare as IDataToken

        request.user = {
            id: sub
        }

        return next()
    } catch {
        throw new AppError("Token invalid", 400)
    }
}