import gql from 'graphql-tag';
import { ResType } from '../shared';

interface CurrencyBalance {
  symbol: string; // e.g USD
  amount: number; // e.g 2000
  isCash: boolean; // e.g true
}

export interface UserType {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  website?: string;
  country?: string;
  bio?: string;
  address?: string;
  image?: string;

  // password: String,
  tokenVersion?: number;

  balance: number;
  currency: string;
}

export interface LoginResponseType extends ResType {
  accessToken: string;
  refreshToken: string;
  user: UserType;
}

export const UserTypeFragment = gql`
  fragment UserTypeFragment on UserType {
    id
    firstname
    lastname
    email
    phone
    website
    country
    bio
    address
    tokenVersion

    balance
    currency
  }
`;

export const LoginResponseTypeFragment = gql`
  fragment LoginResponseTypeFragment on LoginResponseType {
    accessToken
    refreshToken
    user {
      ...UserTypeFragment
    }

    success
    message
  }
  ${UserTypeFragment}
`;

export default UserTypeFragment;
