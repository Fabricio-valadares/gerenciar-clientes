import { Request, Response } from "express"
import { ListOneUserService } from "../services/listOneUser"

class ListOneUserController {
    public async execute(request: Request, response: Response): Promise<Response> {
        const { id } = request.user

        const useService = new ListOneUserService()

        const user = await useService.oneUser(id)

        return response.status(200).json(user)
    }
}

export { ListOneUserController }
