import { Request, Response } from "express"
import { DeleteUserService } from "../services/deleteUserService"

class DeleteUserController {
    public async execute(request: Request, response: Response): Promise<Response> {
        const { id } = request.params

        const userService = new DeleteUserService()

        await userService.deteleUser(id)

        return response.status(204).send()
    }
}

export { DeleteUserController }
