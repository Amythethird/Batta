import User from "./user";

export default interface Person extends User, PersonProps {}

export interface PersonProps {
  firstname?: string;
  lastname?: string;
  short_description?: string;
  profile_picture?: string; // ToDo: check type
}
