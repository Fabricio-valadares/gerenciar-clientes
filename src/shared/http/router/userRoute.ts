import { Router } from "express"
import { CreateUserController } from "../../../modules/user/controller/CreateUserController"
import { ListUserController } from "../../../modules/user/controller/ListUserController"
import { LoginController } from "../../../modules/accounts/controller/LoginController"
import { ForgotPasswordController } from "../../../modules/accounts/controller/ForgotPassword"
import { ResetPasswordController } from "../../../modules/accounts/controller/ResetPassword"
import { verifyToken } from "../middleware/tokenVerify"
import { verifyUserAdmin } from "../middleware/verifyUserAdmin"
import { UpdateUserController } from "../../../modules/user/controller/UpdateUserController"
import { DeleteUserController } from "../../../modules/user/controller/DeleteUserController"
import { VerifyAdminInUserController } from "../../../modules/accounts/controller/VerifyAdminInUserController"
import { ListOneUserController } from "../../../modules/user/controller/ListOneUserController"

const user = Router()
const createUserController = new CreateUserController()
const listUserController = new ListUserController()
const loginController = new LoginController()
const forgotPassword = new ForgotPasswordController()
const resetPasswordController = new ResetPasswordController()
const updateUserController = new UpdateUserController()
const deleteUserController = new DeleteUserController()
const verifyAdminInUserController = new VerifyAdminInUserController()
const listOneUserController = new ListOneUserController()

user.post("/register", createUserController.createUser)
user.get("/users", verifyToken, verifyUserAdmin, listUserController.listUser)

user.post("/login", loginController.execute)
user.post("/user/forgot", forgotPassword.execute)
user.post("/user/reset", resetPasswordController.execute)
user.put("/user/update/:id", verifyToken, updateUserController.execute)
user.post("/user/verify", verifyAdminInUserController.execute)
user.delete("/user/delete/:id", verifyToken, verifyUserAdmin, deleteUserController.execute)
user.get("/user/listone", verifyToken, listOneUserController.execute)


export { user }
