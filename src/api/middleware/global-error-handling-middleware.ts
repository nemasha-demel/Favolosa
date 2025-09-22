import NotFoundError from "../../domain/errors/not-found-error";
import ValidationError from "../../domain/errors/validation-error";
import {Request, Response, NextFunction} from "express"

const gloabalErrorHandlingMiddleware = (err:Error,req:Request,res:Response,next:NextFunction) =>{
    console.log(err);
    if(err instanceof ValidationError){
        res.status(400).json({message:err.message});
    } else if(err instanceof NotFoundError){
        res.status(404).json({message:err.message});
    } else {
        res.status(500).json({message:"Internal server error"});
    }
}

export default gloabalErrorHandlingMiddleware;