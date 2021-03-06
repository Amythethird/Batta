import User from "./user";

export default interface Person extends User, PersonProps {}

export interface PersonProps {
  firstname?: string;
  lastname?: string;
  short_description?: string;
  profile_picture?: Image; // ToDo: check type
}

export interface Image {
  url?: string;
  id?: number;
}
