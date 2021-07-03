import { Request, Response } from "express"
import { CreateServices } from "../services/createService"

class CreateUserController {
    public async createUser(request: Request, response: Response): Promise<Response> {
        const { name, email, cpf, password } = request.body

        const createService = new CreateServices()

        const newUser = await createService.createServices({ name, email, cpf, password })

        return response.status(201).json(newUser)
    }
}

export { CreateUserController }
