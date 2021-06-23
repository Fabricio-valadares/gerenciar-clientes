import { getCustomRepository } from "typeorm"
import { IDataCreateUser } from "../dto"
import { UserRepo } from "../repositories/userRepo"

class ListServices {
    public async listUserServices(): Promise<IDataCreateUser[]> {
        const useRepo = getCustomRepository(UserRepo)

        const listInUser = await useRepo.listUser()

        return listInUser
    }
}

export { ListServices }
