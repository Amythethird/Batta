import User from "./user";

export default interface Person extends User {
  firstname?: string;
  lastname?: string;
  profile_picture?: string;
}
