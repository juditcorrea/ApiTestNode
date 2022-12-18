import { Request, Response } from 'express';
import { fileReaderController } from '../controllers/fileReader.controller';
import { requestController } from '../controllers/request.controller';

var routesApi = require('../config/'+process.env.NODE_ENV+'.json')

class ApiRequestController {
  public async api1(req: Request, res: Response) {
    var data = requestController.get(routesApi.API_MOCS.api1.url);
    data.then(function (response) {
      fileReaderController.buildDocument(response.data.items);
      res.json("Ficheros exportados con éxito");
    })
    .catch(function (error) {
      res.json("Error en la petición API1" + error);
    });
  }
  public async api2(req: Request, res: Response) {
    var data = requestController.get(routesApi.API_MOCS.api2.url);
    data.then(function (response) {
      fileReaderController.buildDocument(response.data.items);
      res.json("Ficheros exportados con éxito");
    })
    .catch(function (error) {
      res.json("Error en la petición API2" + error);
    });
  }
}

export const apiRequestController = new ApiRequestController(); 