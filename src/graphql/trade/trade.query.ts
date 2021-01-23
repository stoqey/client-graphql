
import gql from 'graphql-tag';
import { TradeTypeFragment } from './trade.fragment';

export const GET_TRADES_PAGINATION = gql`
  query GetTrades($limit: Float!, $page: Float!) {
    data: trades(limit: $limit, page: $page) {
      ...TradeTypeFragment
    }
  }
  ${TradeTypeFragment}
`;
