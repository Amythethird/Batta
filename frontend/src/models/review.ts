import Customer from "./customer";
import Shop from "./shop";

export default interface Review {
  id: number | string;
  title?: string;
  rating?: number;
  description?: string;
  author?: Customer;
  date?: Date;
  shop?: Shop;
}
