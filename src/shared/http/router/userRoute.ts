import { Router } from "express"
import { CreateUserController } from "../../../modules/user/controller/CreateUserController"
import { ListUserController } from "../../../modules/user/controller/ListUserController"
import { LoginController } from "../../../modules/user/controller/LoginController"
import { verifyToken } from "../../middleware/tokenVerify"

const user = Router()
const createUserController = new CreateUserController()
const listUserController = new ListUserController()
const loginController = new LoginController()

user.post("/register", createUserController.createUser)
user.get("/users", verifyToken, listUserController.listUser)

user.post("/login", loginController.execute)

export { user }

