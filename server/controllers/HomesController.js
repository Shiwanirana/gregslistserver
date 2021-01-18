import BaseController from "../utils/BaseController"
import {homesService} from "../services/HomesService"


export class HomesController extends BaseController{
  constructor(){
    super('api/homes')
    this.router
      .get("", this.getAll)
      .get("/:homeId", this.getOne)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
      
  }

  
  async getAll(req, res, next) {
    try {
      res.send(await homesService.getAll(req.query))
    } catch (error) {
      next(error)
    }
  }
  
  async getOne(req,res,next) {
    try {
      res.send(await homesService.getOne(req.params.homeId))
    } catch (error) {
      next(error)
    }
  }

  async create(req,res,next) {
  try {
    res.send(await homesService.create(req.body))
  } catch (error) {
    next(error)
  }
  }
  
  async edit(req,res,next) {
    try {
      res.send(await homesService.edit(req.params.id, req.body))
    } catch (error) {
      next(error)
    }
  }

  async delete(req,res,next) {
    try {
      res.send(await homesService.delete(req.params.id))
    } catch (error) {
      next(error)
    }
  }

}