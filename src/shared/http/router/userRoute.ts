import { Router } from "express"
import { CreateUserController } from "../../../modules/user/controller/CreateUserController"
import { ListUserController } from "../../../modules/user/controller/ListUserController"

const user = Router()
const createUserController = new CreateUserController()
const listUserController = new ListUserController()

user.post("/register", createUserController.createUser)
user.get("/users", listUserController.listUser)

export { user }

