import { Request, Response } from "express"
import { ListServices } from "../services/listServices"

class ListUserController {
    public async listUser(request: Request, response: Response): Promise<Response> {
        const listServices = new ListServices()

        const listUser = await listServices.listUserServices()

        return response.status(200).json(listUser)
    }
}

export { ListUserController }
