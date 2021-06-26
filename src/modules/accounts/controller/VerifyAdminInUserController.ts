import { Request, Response } from "express"
import { VerifyAdminInUser } from "../services/verifyAdminInUser"

class VerifyAdminInUserController {
    public async execute(request: Request, response: Response): Promise<Response> {
        const { id } = request.body

        const verifyAdminInUser = new VerifyAdminInUser()

        const verify = await verifyAdminInUser.verifyDataUser(id)

        return response.status(200).json({
            verify: verify
        })
    }
}

export { VerifyAdminInUserController }

