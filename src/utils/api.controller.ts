
import { Request, Response,  } from 'express';
import { apiRequestController } from '../controllers/apiRequest.controller';
var rimraf = require("rimraf");

class ApiController {
  public async index(req: Request, res: Response) {
    rimraf("./src/outputs/*", function () { console.log("Outputs directory was empty"); });
    switch(req.query.api) {
      case "api1":
        apiRequestController.api1(req,res);
        break;
      case "api2":
        apiRequestController.api2(req,res);
        break;
      default:
        res.json("No existe la Api seleccionada");
    }
  }
}

export const apiController = new ApiController(); 
