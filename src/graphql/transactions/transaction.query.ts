import gql from 'graphql-tag';
import {TransactionTypeFragment} from './transaction.fragment';

export const GET_MY_TRANSACTIONS = gql`
    query Transactions(
        $tradeEnv: String
        $filter: String
        $owner: String!
        $page: Float
        $limit: Float
    ) {
        data: transactions(
            tradeEnv: $tradeEnv
            filter: $filter
            owner: $owner
            page: $page
            limit: $limit
        ) {
            ...TransactionTypeFragment
        }
    }
    ${TransactionTypeFragment}
`;
