import gql from 'graphql-tag';
import {ResTypeFragment} from '../shared';

/**
 * StartPortfolio($size: Number!, $action: String!, $owner: String!)
 */
export const START_PORTFOLIO_MUTATION = gql`
    mutation StartPortfolio($size: Float!, $action: String!, $owner: String!) {
        data: startPortfolio(size: $size, action: $action, owner: $owner) {
            ...ResTypeFragment
        }
    }
    ${ResTypeFragment}
`;

/**
 * ClosePortfolio($id: String!, $owner: String!)
 */
export const CLOSE_PORTFOLIO_MUTATION = gql`
    mutation ClosePortfolio($id: String!, $owner: String!) {
        data: closePortfolio(id: $id, owner: $owner) {
            ...ResTypeFragment
        }
    }
    ${ResTypeFragment}
`;
