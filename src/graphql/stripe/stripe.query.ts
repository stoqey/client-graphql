import gql from 'graphql-tag';

export const GET_STRIPECONNECTED_ACCOUNTS = gql`
    query GetStripeConnectedAccounts($owner: String!) {
        data: getStripeConnectedAccounts(owner: $owner)
    }
`;
