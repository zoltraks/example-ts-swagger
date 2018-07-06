import { InformationModel } from '../component/information/information.model';
import * as bodyParser from "body-parser";
import * as express from "express";
import "reflect-metadata";
import { Container } from "inversify";
import { interfaces, InversifyExpressServer, TYPE } from "inversify-express-utils";
import { InformationController } from "../component/information/information.controller";
import * as swagger from "swagger-express-ts";
import { SwaggerDefinitionConstant } from "swagger-express-ts";
// tslint:disable-next-line:no-var-requires
const configuration = require("../configuration.json");

// set up container
const container = new Container();

// note that you *must* bind your controllers to Controller
container.bind<interfaces.Controller>(TYPE.Controller)
  .to(InformationController).inSingletonScope()
  .whenTargetNamed(InformationController.TARGET_NAME
  );

// create server
const server = new InversifyExpressServer(container);

// tslint:disable-next-line:no-shadowed-variable
server.setConfig((app: any) => {
    app.use("/swagger/swagger", express.static("swagger"));
    app.use("/swagger/swagger/assets",
      express.static("node_modules/swagger-ui-dist")
    );
    app.use(bodyParser.json());
    app.use(
      swagger.express({
        path: "/swagger/v1/swagger.json",
        definition: {
          info: {
            title: "My API...",
            version: "1.0"
          },
          externalDocs: {
            url: "My URL..."
          },
          responses: {
            500: {}
          }
        }
      })
    );
  });

// tslint:disable-next-line:no-shadowed-variable
server.setErrorConfig((app: any) => {
    app.use(
      (
        err: Error,
        request: express.Request,
        response: express.Response,
        next: express.NextFunction
      ) => {
        console.error(err.stack);
        response.status(500).send("Error from the other side!");
      }
    );
  });

const app = server.build();

app.listen( configuration.port );
console.info( "Server is listening on: " + "http://localhost:" + configuration.port );
console.info( "Swagger URL: " + "http://localhost:" + configuration.port + "/swagger/v1/swagger.json");
