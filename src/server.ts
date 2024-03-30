import { app } from "./app";

import *  as dotenv from 'dotenv';
import sequelize from "./database";

dotenv.config();


// DB connection
sequelize.authenticate()
  .then(() => {
    console.log("Database connection has been established successfully.");
  })
  .catch((err: any) => {
    throw err;
  });
 

//server
app.listen(process.env.PORT, () => {
    console.log(`Server listening on ${process.env.PORT}...`);
  });