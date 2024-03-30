import express from "express";
import { Op } from "sequelize";
import * as bcrypt from "bcrypt";
import User from "../user/userModel";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

export class AuthService {
  async signup(data: any) {
    //validate user input

    if (!data.username || !data.email || !data.password) {
      throw new Error("Please fill necessary fields");
    }

    // check if user already exist

    const checkUser = await User.findOne({
      where: {
        [Op.or]: [{ email: data.email }, { username: data.username }],
      },
    });

    if (checkUser) {
      if (checkUser.email == data.email) {
        throw new Error("Email Already Exist");
      } else if (checkUser.username == data.username) {
        throw new Error("Username Already Exist");
      }
    }

    //   hashing password
    const hashedPassword = bcrypt.hashSync(data.password, 10);

    // create new user
    const new_user = await User.create({
      username: data.username,
      email: data.email,
      password: hashedPassword,
    });

    return new_user;
  }

  async login(data: any) {
    const user = await User.findOne( {where: { username: data.username  }});
    if (!user) {
      throw new Error("User not found");
    }

    const userPassword = await bcrypt.compare(data.password, user.password);
    if(!user || !userPassword){
        throw new Error ('Invalid username or password')
    }
      //generate token
      const token = await this.getSignedJwtToken(user);

      return { user, token };
    }


    async getSignedJwtToken(user: any) {
        return jwt.sign(
          { id: user.id, email: user.email },
          process.env.JWT_SECRET!,
          {
            expiresIn: process.env.JWT_EXPIRE,
          }
        );
      }
  }

 
