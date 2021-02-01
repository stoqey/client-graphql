import gql from 'graphql-tag';
import {ResTypeFragment} from '../shared';

export const CREATE_TRADE_MUTATION = gql`
    mutation CreateTrade($size: Number!, $action: String!, $owner: String!) {
        data: createTrade(size: $size, action: $action, owner: $owner) {
            ...ResTypeFragment
        }
    }
    ${ResTypeFragment}
`;

export const CLOSE_TRADE_MUTATION = gql`
    mutation CreateTrade($size: Number!, $action: String!, $owner: String!) {
        data: createTrade(size: $size, action: $action, owner: $owner) {
            ...ResTypeFragment
        }
    }
    ${ResTypeFragment}
`;
