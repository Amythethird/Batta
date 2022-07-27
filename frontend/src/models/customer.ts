import Person from "./person";

export default interface Customer extends Person, CustomerProps {}

export interface CustomerProps {
  street_name?: string;
  house_number?: number;
  postal_code?: number;
  city?: string;
}
