import { getCustomRepository } from "typeorm"
import { UserRepo } from "../repositories/userRepo"

class ListServices {
    public async listUserServices(): Promise<any> {
        const useRepo = getCustomRepository(UserRepo)

        const listInUser = await useRepo.listUser()

        const listUser = listInUser.map((ele) => {
            if (!ele.isAdmin) {
                return (
                    {
                        id: ele.id,
                        name: ele.name,
                        email: ele.email,
                        created_at: ele.created_at
                    }
                )
            }
            
        }).filter(ele => ele !== undefined)

        return listUser
    }
}

export { ListServices }
