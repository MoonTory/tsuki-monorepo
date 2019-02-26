import path from 'path';
import { IController } from '../../../../typings/http/controller';

export default async function createControllerRoutes(modules: string[]): Promise<IController[]> {
  try {
    const controllers: IController[] = [];

    modules.forEach(controllerUri => {
      let controllerPath = path.resolve('src/interfaces/http/controllers/', controllerUri);
      let controller: IController = require(controllerPath);

      controllers.push(controller);
    });

    return controllers;
  } catch (error) {
    throw error;
  }
}
