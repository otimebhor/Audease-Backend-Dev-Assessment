import { Sequelize, Model, DataTypes } from "sequelize";
import sequelize from "../database";

class User extends Model {
  public id!: number;
  public username!: string;
  public email!: string;
  public password!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: new DataTypes.STRING(),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "users",
    modelName: "User",
  }
);

User.sync({ alter: true })
  .then(() => {
    console.log("User table created successfully!");
  })
  .catch((error: any) => {
    console.error("Unable to create table : ", error);
  });

export default User;
