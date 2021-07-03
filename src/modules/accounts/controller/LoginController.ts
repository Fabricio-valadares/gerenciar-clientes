import { Request, Response } from "express"
import { SessionLoginService } from "../services/sessionLoginService"

class LoginController {
    public async execute(request: Request, response: Response): Promise<Response> {
        const { emailOrCPF, password } = request.body

        const sessionLoginService = new SessionLoginService()

        const token = await sessionLoginService.verifyDataUser({ emailOrCPF, password })

        return response.status(200).json(token)
    }
}

export { LoginController }
