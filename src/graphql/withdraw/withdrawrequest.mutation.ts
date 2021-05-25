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
        data: cancelWithdrawRequest(id: $id, owner: $owner) {
            ...ResTypeFragment
        }
    }
    ${ResTypeFragment}
`;

export const ADMIN_CONFIRM_WITHDRAWREQUEST_MUTATION = gql`
    mutation AdminConfirmWithdrawRequest($id: String!, $status: String) {
        data: confirmWithdrawRequest(id: $id, status: $status) {
            ...ResTypeFragment
        }
    }
    ${ResTypeFragment}
`;
