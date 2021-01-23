import gql from 'graphql-tag';
import { TradingEnvType } from '../../shared';

export interface TransactionType {
  id?: string;

  tradeEnv?: TradingEnvType;
  owner?: string;

  status?: string;
  type?: string; // withdraw or deposit
  source?: string; // paypal, credit card, interact
  sourceId?: string; // paypal, credit card, interact
  currency?: string;
  amount?: number;

  createdAt?: Date;
  updatedAt?: Date;
  deleted?: boolean;
}

export const TransactionTypeFragment = gql`
  fragment TransactionTypeFragment on TransactionType {
    id

    tradeEnv
    owner

    status
    type
    source
    sourceId
    currency
    amount

    createdAt
    updatedAt
    deleted
  }
`;
