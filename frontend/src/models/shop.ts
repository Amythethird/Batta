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
  highlights?: string; //ToDo: check type
  short_description?: string;
  website?: string;
  labels?: string[]; //ToDo: check type
  labels_icons?: string; //ToDo: check type
  user_photo?:string;
  address?: string;
  opening?: Record<string, string>;
}
