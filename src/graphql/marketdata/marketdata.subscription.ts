import gql from 'graphql-tag';
import {MarketDataTypeFragment} from './marketdata.fragment';

export const CURRENCY_SUBSCRIPTION = gql`
    subscription GetCurrency($symbol: String!) {
        data: onCurrency(symbol: $symbol) {
            ...MarketDataTypeFragment
        }
    }
    ${MarketDataTypeFragment}
`;
