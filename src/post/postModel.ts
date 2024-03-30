import { Sequelize, Model, DataTypes, Optional } from "sequelize";
import sequelize from "../database";
import User from "../user/userModel";

interface PostAttributes {
  id: number;
  title: string;
  content?: string;
  userId: number;
}

interface PostCreationAttributes extends Optional<PostAttributes, "id"> {}

class Post
  extends Model<PostAttributes, PostCreationAttributes>
  implements PostAttributes
{
  public id!: number;
  public title!: string;
  public content!: string;
  public userId!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT, // Consider using TEXT for longer content
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
  },
  {
    sequelize,
    tableName: "posts",
    modelName: "Post",
  }
);

User.hasMany(Post, {
  foreignKey: "userId",
});

Post.belongsTo(User, {
  foreignKey: "userId",
  as: "user",
});

Post.sync({ alter: true })
  .then(() => {
    console.log("Post table created successfully!");
  })
  .catch((error: any) => {
    console.error("Unable to create table : ", error);
  });

export default Post;
