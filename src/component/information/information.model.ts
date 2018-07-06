import { ApiModel, ApiModelProperty } from "swagger-express-ts";

@ApiModel( {
    description : "Information" ,
    name : "Information",
} )
export class InformationModel {

    @ApiModelProperty( {
        description : "Id of version" ,
        required : true,
    } )
    public id: number;

    @ApiModelProperty( {
        description : "" ,
        required : true,
    } )
    public name: string;

    @ApiModelProperty( {
        description : "Description of version" ,
        required : true,
    } )
    public description: string;
}
