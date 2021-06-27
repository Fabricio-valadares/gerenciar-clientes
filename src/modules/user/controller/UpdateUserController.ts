import { Request, Response } from "express"
import { UpdateUserService } from "../services/updateUserService"

class UpdateUserController {
    public async execute(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body
        const { id } = request.params

        const userService = new UpdateUserService()

        const userUpdate = await userService.upadateUser({ id, name, email, password })

        return response.status(200).json(userUpdate)
    }    
}

export { UpdateUserController }
