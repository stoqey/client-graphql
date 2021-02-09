import gql from 'graphql-tag';
import {ResTypeFragment} from '../shared';

export const START_PORTFOLIO_MUTATION = gql`
    mutation StartPortfolio($size: Number!, $action: String!, $owner: String!) {
        data: startPortfolio(size: $size, action: $action, owner: $owner) {
            ...ResTypeFragment
        }
    }
    ${ResTypeFragment}
`;

export const CLOSE_PORTFOLIO_MUTATION = gql`
    mutation ClosePortfolio($id: String!) {
        data: closePortfolio(id: $id) {
            ...ResTypeFragment
        }
    }
    ${ResTypeFragment}
`;
