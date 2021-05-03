import gql from 'graphql-tag';

export const GET_STRIPECONNECTED_ACCOUNTS = gql`
    query GetStripeConnectedAccounts($owner: String!, $limit: Float, $page: Float) {
        data: getStripeConnectedAccounts(owner: $owner, limit: $limit, page: $page)
    }
`;
