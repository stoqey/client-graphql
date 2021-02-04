import gql from 'graphql-tag';
import {UserTypeFragment} from './user.fragment';

export const USER_SUBSCRIPTION = gql`
    subscription SubUser($id: String) {
        data: onUser(id: $id) {
            ...UserTypeFragment
        }
    }
    ${UserTypeFragment}
`;
