import { Request, Response } from "express"
import { ChangePasswordUserRepo } from "../services/changePassword"

class ResetPasswordController {
    public async execute(request: Request, response: Response): Promise<Response> {
        const { token, password } = request.body

        const changePassword = new ChangePasswordUserRepo()

        await changePassword.changePassword({ token, password })

        return response.status(204).send()
    }
}

export { ResetPasswordController }

