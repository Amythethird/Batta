import Customer, { CustomerProps } from "../models/customer";
import Person, { PersonProps } from "../models/person";
import User from "../models/user";
import { PersonResponse, UserResponse } from "./models/user-response-models";

export function parseUserResponseToUser(userResponse: UserResponse): User {
  let user = { ...userResponse };
  delete user.person;
  return user;
}

export function parseUserResponseToPerson(userResponse: UserResponse): Person {
  if (userResponse.person) {
    return {
      ...parseUserResponseToUser(userResponse),
      ...parsePersonResponseToPersonProps(userResponse.person),
    };
  } else {
    return parseUserResponseToUser(userResponse);
  }
}

export function parseUserResponseToCustomer(
  userResponse: UserResponse
): Customer {
  if (userResponse.person) {
    return {
      ...parseUserResponseToUser(userResponse),
      ...parsePersonResponseToPersonProps(userResponse.person),
      ...parsePersonResponseToCustomerProps(userResponse.person),
    };
  } else {
    return parseUserResponseToUser(userResponse);
  }
}

function parsePersonResponseToPersonProps(
  personResponse: PersonResponse
): PersonProps {
  let personProps = { ...personResponse };
  // eslint-disable-next-line no-undef
  personProps.profile_picture = `${process.env.REACT_APP_STRAPI}${
    (personResponse.profile_picture as any).url
  }`;
  delete personProps.customer;
  return personProps;
}

function parsePersonResponseToCustomerProps(
  personResponse: PersonResponse
): CustomerProps {
  return personResponse.customer ?? {};
}
