import gql from 'graphql-tag';
import {ResTypeFragment} from '../shared';

export const CREATE_WITHDRAWREQUEST_MUTATION = gql`
    mutation CreateWithdrawRequest($args: CreateWithdrawRequestArgs!) {
        data: createWithdrawRequest(args: $args) {
            ...ResTypeFragment
        }
    }
    ${ResTypeFragment}
`;

export const CANCEL_WITHDRAWREQUEST_MUTATION = gql`
    mutation CancelWithdrawRequest($id: String!, $owner: String) {
        data: cancelWithdrawRequests(id: $id, owner: $owner) {
            ...ResTypeFragment
        }
    }
    ${ResTypeFragment}
`;
