import { CustomerProps } from "../../models/customer";
import { PersonProps } from "../../models/person";
import User from "../../models/user";

export interface PersonResponse extends PersonProps {
  customer?: CustomerProps;
}

export interface UserResponse extends User {
  person?: PersonResponse;
}
