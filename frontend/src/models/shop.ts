import Person from "./person";

export default interface Shop {
  id: number;
  name?: string;
  description?: string;
  store_video?: string; //ToDo: check type
  postal_code?: number;
  city?: string;
  email?: string;
  area_code?: number;
  phone?: number;
  highlights?: Highlights[]; //ToDo: check type
  short_description?: string;
  website?: string;
  labels?: string[]; //ToDo: check type
  labels_icons?: string; //ToDo: check type
  opening_hours?: Record<string, string>;
  person: Person;
}

export interface Highlights {
  id: string;
  url: string;
}
