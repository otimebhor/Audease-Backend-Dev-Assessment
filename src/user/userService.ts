import User from "./userModel";


export class UserService {

  async findByUsername(username: string) {
    const user = await User.findOne({
      where: { username: username },
    });

    if (!user) {
      throw new Error("User not found");
    }
    return user;
  }
}
