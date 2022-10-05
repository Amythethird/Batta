import Customer from "./customer";
import Shop from "./shop";

export default interface ShopOwner extends Customer, ShopOwnerProps {}

export interface ShopOwnerProps {
  shops?: Shop[];
}
