import { getCustomRepository } from "typeorm"
import { IDataUser } from "../dtos"
import { UserRepo } from "../repositories/userRepo"

class ListServices {
    public async listUserServices(): Promise<IDataUser[]> {
        const useRepo = getCustomRepository(UserRepo)

        const listInUser = await useRepo.listUser()

        return listInUser
    }
}

export { ListServices }
