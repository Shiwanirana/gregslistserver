import { dbContext } from "../db/DbContext"
import  {BadRequest} from "../utils/Errors"
class HomesService{
  async getAll(query = {}) {
    return await dbContext.Homes.find(query)
  }

  async getOne(homeId) {
    let homeFound = await dbContext.Homes.findById(homeId)
    if(!homeFound){
      throw new BadRequest("No home exists with that Id")
    }
    return carFound
  }
  async create(body) {
    return await dbContext.Homes.create(body)
  }

  async edit(id, body) {
   
    let updated = await dbContext.Homes.findByIdAndUpdate(id, body, {new: true})
    if(!updated){
      throw new BadRequest("No home exists with that Id")
    }
    return updated
  }
  
  async delete(id) {
    let home = await dbContext.Homes.findByIdAndDelete(id)
    if(!home){
      throw new BadRequest("No home exists with that Id")
    }
    return "successfully deleted"
   }

}
export const homesService = new HomesService()