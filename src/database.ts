import { Sequelize } from "sequelize";

const sequelize = new Sequelize("blog", "postgres", "Sp@rk!e$", {
  host: "localhost",
  dialect: "postgres",
});

export default sequelize;
