import Achievement from "./achievement";
import Customer from "./customer";
import Shop from "./shop";

export default interface Coupon {
  id: number | string;
  couponID?: string;
  shop?: Shop;
  customer?: Customer;
  currentValue?: number;
  value?: number;
  boughtAt?: Date;
  expiringDate?: Date;
  giftFrom?: Customer;
  achievement?: Achievement;
}
