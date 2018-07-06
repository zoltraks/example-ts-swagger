import * as express from "express";
import { injectable } from "inversify";

import {
    controller,
    httpGet,
    interfaces,
    httpPost,
} from "inversify-express-utils";
import {
    ApiPath,
    ApiOperationGet,
    SwaggerDefinitionConstant,
    ApiOperationPost,
} from "swagger-express-ts";

// tslint:disable-next-line:no-var-requires
const data = require("../../data.json");

@ApiPath({
    path: "/information",
    name: "Information",
    security: { basicAuth: [] },
})
@controller("/information")
// @injectable()
export class InformationController implements interfaces.Controller {
    public static TARGET_NAME: string = "Information";

    @ApiOperationGet({
        description: "Get all information objects",
        summary: "Get all information objects",
        responses: {
            200: {
                description: "Success",
                type: SwaggerDefinitionConstant.Response.Type.ARRAY,
                model: "InformationModel"
            }
        },
        security: {
            apiKeyHeader: [],
        },
    })
    @httpGet("/")
    public getInformations(request: express.Request, response: express.Response, next: express.NextFunction): void {
        const { id } = request.params;
        response.json(data[Number(id)]);
    }

    @ApiOperationGet({
        description: "Get information object",
        summary: "Get information object",
        responses: {
            200: {
                description: "Success",
                type: SwaggerDefinitionConstant.Response.Type.ARRAY,
                model: "InformationModel"
            }
        },
        security: {
            apiKeyHeader: [],
        },
    })
    @httpGet("/:id")
    public getInformation(request: express.Request, response: express.Response, next: express.NextFunction): void {
        const { id } = request.params;
        response.json(data[Number(id)]);
    }

    @ApiOperationPost({
        description: "Create new information object",
        summary: "Create new information object",
        parameters: {
            body: {
                description: "Create new information object",
                required: true,
                model: "InformationModel"
            }
        },
        responses: {
            200: { description: "Success" },
            400: { description: "Error" },
        },
    })
    @httpPost("/")
    public postInformation(request: express.Request, response: express.Response, next: express.NextFunction): void {
        if (!request.body) {
            return response.status(400).end();
        }
        data.push(request.body);
        response.json(request.body);
    }

}
