import gql from 'graphql-tag';
import { MarketDataTypeFragment, MarketSymbolInfoFragment } from './marketdata.fragment';

export const GET_MARKETDATA = gql`
  query GetMarketData($symbol: String!, $range: String!, $start: DateTime, $end: DateTime, $limit: Float) {
    data: getMarketData(symbol: $symbol, range: $range, start: $start, end: $end, limit: $limit) {
      ...MarketDataTypeFragment
    }
  }
  ${MarketDataTypeFragment}
`;

export const GET_QUOTE = gql`
  query GetQuote($symbol: String!) {
    quote: getQuote(symbol: $symbol) {
      ...MarketDataTypeFragment
    }
  }
  ${MarketDataTypeFragment}
`;

export const GET_INFO = gql`
  query GetInfo($symbol: String!) {
    info: getInfo(symbol: $symbol) {
      ...MarketSymbolInfoFragment
    }
  }
  ${MarketSymbolInfoFragment}
`;

// TODO
// Get wallet activity