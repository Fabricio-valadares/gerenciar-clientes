import { Request, Response } from "express"
import { OrderNewPasswordServices } from "../services/orderNewPassword"

class ForgotPasswordController {
    public async execute(request: Request, response: Response): Promise<Response> {
        const { email } = request.body

        const orderNewPasswordServices = new OrderNewPasswordServices()

        await orderNewPasswordServices.createOrderToken(email)

        return response.status(204).send()
    }
}

export { ForgotPasswordController }
