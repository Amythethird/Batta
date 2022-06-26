import Person from "./person";

export default interface Customer extends Person {
  postal_code?: number;
  street?: string;
  city?: string;
}
