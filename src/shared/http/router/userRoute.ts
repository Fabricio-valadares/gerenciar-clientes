import { Router } from "express"
import { CreateUserController } from "../../../modules/user/controller/CreateUserController"
import { ListUserController } from "../../../modules/user/controller/ListUserController"
import { LoginController } from "../../../modules/accounts/controller/LoginController"
import { ForgotPasswordController } from "../../../modules/accounts/controller/ForgotPassword"
import { ResetPasswordController } from "../../../modules/accounts/controller/ResetPassword"
import { verifyToken } from "../../middleware/tokenVerify"

const user = Router()
const createUserController = new CreateUserController()
const listUserController = new ListUserController()
const loginController = new LoginController()
const forgotPassword = new ForgotPasswordController()
const resetPasswordController = new ResetPasswordController()

user.post("/register", createUserController.createUser)
user.get("/users", verifyToken, listUserController.listUser)

user.post("/login", loginController.execute)
user.post("/user/forgot", forgotPassword.execute)
user.post("/user/reset", resetPasswordController.execute)


export { user }

