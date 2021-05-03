import gql from 'graphql-tag';
import {StatusType} from '../shared';

export interface WithdrawRequestType {
    id: string;
    owner: string;
    amount: number;
    status?: StatusType;
    notes?: string;
    paymentMethod?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export const WithdrawRequestTypeFragment = gql`
    fragment WithdrawRequestTypeFragment on WithdrawRequestType {
        id
        owner
        amount
        status
        paymentMethod

        createdAt
        updatedAt
    }
`;

export default WithdrawRequestTypeFragment;
