import gql from 'graphql-tag';
import {TransactionTypeFragment} from './transaction.fragment';

export const TRANSACTION_SUBSCRIPTION = gql`
    subscription SubTransaction($owner: String, $time: String) {
        data: onTransaction(owner: $owner, time: $time) {
            ...TransactionTypeFragment
        }
    }
    ${TransactionTypeFragment}
`;
