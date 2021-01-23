import gql from 'graphql-tag';

export interface PaymentMethodType {
  id?: string;
  name: string;
  type: string;
  info: string;
}

export const PaymentMethodTypeFragment = gql`
  fragment PaymentMethodTypeFragment on PaymentMethodType {
    id
    name
    type
    info
  }
`;
