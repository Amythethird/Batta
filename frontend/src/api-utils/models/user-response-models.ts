import { CustomerProps } from "../../models/customer";
import { ShopOwnerProps } from "../../models/shop-owner";
import User from "../../models/user";

export interface UserResponse extends User {
  customer?: CustomerResponse;
}

export interface CustomerResponse extends CustomerProps {
  user?: UserResponse;
  shopOwner?: ShopOwnerResponse;
}

export interface ShopOwnerResponse extends ShopOwnerProps {
  customer?: CustomerResponse;
}
