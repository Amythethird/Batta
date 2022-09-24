import Customer, { CustomerProps } from "../models/customer";
import ShopOwner, { ShopOwnerProps } from "../models/shopOwner";
import User from "../models/user";
import {
  CustomerResponse,
  ShopOwnerResponse,
  UserResponse,
} from "./models/user-response-models";

/* User */

export function parseUserResponseToUser(userResponse: UserResponse): User {
  let user = { ...userResponse };
  delete user.customer;
  return user;
}

export function parseUserResponseToCustomer(
  userResponse: UserResponse
): Customer {
  if (userResponse.customer) {
    return {
      ...parseUserResponseToUser(userResponse),
      ...parseCustomerResponseToCustomerProps(userResponse.customer),
    };
  } else {
    return parseUserResponseToUser(userResponse);
  }
}

export function parseUserResponseToShopOwner(
  userResponse: UserResponse
): ShopOwner {
  if (userResponse.customer?.shopOwner) {
    return {
      ...parseUserResponseToCustomer(userResponse),
      ...parseShopOwnerResponseToShopOwnerProps(
        userResponse.customer.shopOwner
      ),
    };
  } else {
    return parseUserResponseToCustomer(userResponse);
  }
}

/* Customer */

export function parseCustomerResponseToCustomerProps(
  customerResponse: CustomerResponse
): CustomerProps {
  let customerProps = { ...customerResponse };
  delete customerProps.user;
  delete customerProps.shopOwner;
  return customerProps;
}

export function parseCustomerResponseToCustomer(
  customerResponse: CustomerResponse
): Customer {
  if (customerResponse.user) {
    return {
      ...parseUserResponseToUser(customerResponse.user),
      ...parseCustomerResponseToCustomerProps(customerResponse),
    };
  } else {
    return parseCustomerResponseToCustomerProps(customerResponse);
  }
}

export function parseCustomerResponseToShopOwner(
  customerResponse: CustomerResponse
): ShopOwner {
  if (customerResponse.shopOwner) {
    return {
      ...parseCustomerResponseToCustomer(customerResponse),
      ...parseShopOwnerResponseToShopOwnerProps(customerResponse.shopOwner),
    };
  } else {
    return parseCustomerResponseToCustomer(customerResponse);
  }
}

/* ShopOwner */

export function parseShopOwnerResponseToShopOwnerProps(
  shopOwnerResponse: ShopOwnerResponse
): ShopOwnerProps {
  let shopOwnerProps = { ...shopOwnerResponse };
  delete shopOwnerProps.customer;
  return shopOwnerProps;
}

export function parseShopOwnerResponseToCustomer(
  shopOwnerResponse: ShopOwnerResponse
): Customer {
  return parseCustomerResponseToCustomer(shopOwnerResponse.customer!);
}

export function parseShopOwnerResponseToShopOwner(
  shopOwnerResponse: ShopOwnerResponse
): ShopOwner {
  if (shopOwnerResponse.customer) {
    return {
      ...parseCustomerResponseToCustomer(shopOwnerResponse.customer),
      ...parseShopOwnerResponseToShopOwnerProps(shopOwnerResponse),
    };
  } else {
    return parseShopOwnerResponseToShopOwnerProps(shopOwnerResponse);
  }
}
