import gql from 'graphql-tag';
import {PortfolioTypeFragment} from './portfolio.fragment';

/**
 * GetPortfolioPagination($limit: Float!, $page: Float!)
 */
export const GET_PORTFOLIOS_PAGINATION = gql`
    query GetPortfolioPagination($limit: Float!, $page: Float!) {
        data: portfolios(limit: $limit, page: $page) {
            ...PortfolioTypeFragment
        }
    }
    ${PortfolioTypeFragment}
`;

/**
 * GetMyPortfolioPagination($filter: String, $owner: String!, $limit: Float, $page: Float)
 */
export const GET_MY_PORTFOLIOS_PAGINATION = gql`
    query GetMyPortfolioPagination($filter: String, $owner: String!, $limit: Float, $page: Float) {
        data: myPortfolios(filter: $filter, owner: $owner, limit: $limit, page: $page) {
            ...PortfolioTypeFragment
        }
    }
    ${PortfolioTypeFragment}
`;
