import gql from 'graphql-tag';
import {MarketDataTypeFragment} from './marketdata.fragment';

export const CURRENCY_SUBSCRIPTION = gql`
    subscription GetCurrency($symbol: String, $time: String) {
        data: onCurrency(symbol: $symbol, time: $time) {
            ...MarketDataTypeFragment
        }
    }
    ${MarketDataTypeFragment}
`;
