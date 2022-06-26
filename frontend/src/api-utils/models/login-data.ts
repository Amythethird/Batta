import User from "../../models/user";

export default interface LoginData {
  jwt: string;
  user: User;
}
