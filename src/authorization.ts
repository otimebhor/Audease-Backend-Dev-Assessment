import jwt, { JwtPayload }  from "jsonwebtoken";
import express, { NextFunction, Request, Response } from "express";
import * as dotenv from "dotenv";
import User from "./user/userModel";
dotenv.config();

interface AuthenticatedRequest extends Request {
    user?: User | null
  }


export const protect = async(req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    let token ;
  
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      // token in Header
      token = req.headers.authorization.split(" ")[1];
    }else{
      return res.status(400).json({
        message:"You are not authenticated"
      })
    }
  
    if (!token) {
        return res.status(400).json({
            message:"Unauthorized"
          })
    }
    try {
        const decodedData = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
       
        
        const userDetails  = await User.findByPk(decodedData.id);
        
        // console.log(userDetails)
        req.user = userDetails || null;
   
          next();
        
       } catch (error) {
        return   res.status(400).json({
            message:"Unauthorized"
          })
        
       }
          

       
        
      };
    