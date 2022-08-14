import Achievement from "./achievement";
import Address from "./address";
import Coupon from "./coupon";
import Media from "./media";
import Review from "./review";
import Shop from "./shop";
import User from "./user";

export default interface Customer extends User, CustomerProps {}

export interface CustomerProps {
  firstname?: string;
  lastname?: string;
  shortDescription?: string;
  profilePicture?: Media;
  profileHeaderImage?: Media;
  address?: Address;
  coupons?: Coupon[];
  achievements?: Achievement[];
  reviews?: Review[];
  favouriteShops?: Shop[];
}
