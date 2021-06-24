import { Request, Response } from "express"
import { UpdateUserService } from "../services/updateUserService"

class UpdateUserController {
    public async execute(request: Request, response: Response): Promise<Response> {
        const { name, email } = request.body
        const { id } = request.user

        const userService = new UpdateUserService()

        const userUpdate = await userService.upadateUser({ id, name, email })

        return response.status(200).json(userUpdate)
    }    
}

export { UpdateUserController }
