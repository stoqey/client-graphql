import gql from 'graphql-tag';
import {PortfolioTypeFragment} from './portfolio.fragment';

export const GET_PORTFOLIOS_PAGINATION = gql`
    query GetPortfolioPagination($limit: Float!, $page: Float!) {
        data: portfolios(limit: $limit, page: $page) {
            ...PortfolioTypeFragment
        }
    }
    ${PortfolioTypeFragment}
`;

export const GET_MY_PORTFOLIOS_PAGINATION = gql`
    query GetMyPortfolioPagination($owner: String!, $limit: Float!, $page: Float!) {
        data: myPortfolios(owner: $owner, limit: $limit, page: $page) {
            ...PortfolioTypeFragment
        }
    }
    ${PortfolioTypeFragment}
`;
