import gql from 'graphql-tag';
import {TradeTypeFragment} from './trade.fragment';

export const TRADES_SUBSCRIPTION = gql`
    subscription SubTrades($symbol: String, $time: String) {
        data: onTrades(symbol: $symbol, time: $time) {
            ...TradeTypeFragment
        }
    }
    ${TradeTypeFragment}
`;
