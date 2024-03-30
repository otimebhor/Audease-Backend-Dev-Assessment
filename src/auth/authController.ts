import express, { Request, Response } from 'express';
import { AuthService } from './authService';



const authService = new AuthService();
export class AuthController {

  async register(req: Request, res: Response){
    try{
      
      const newUser = await authService.signup(req.body)
      return res.status(201).json( newUser )
  
    }catch (error: any) {
      console.error(error);
      return res.status(500).json({ message: error.message || 'Internal Server Error' });
     
    }
    };

    async login(req: Request, res: Response){
        try{
          
          const user = await authService.login(req.body)
          return res.status(200).json( user )
      
        }catch (error: any) {
          console.error(error);
          return res.status(500).json({ message: error.message || 'Internal Server Error' });
         
        }
        };

}