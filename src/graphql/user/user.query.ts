import gql from 'graphql-tag';
import {UserTypeFragment} from './user.fragment';

// export const GET_END_USER = gql`
//   query GetEnduser($id: ID) {
//     enduser(id: $id) {
//       ...EnduserFragment
//     }
//   }
//   ${EnduserFragment}
// `;

export const GET_ALL_USERS = gql`
    query GetAllUsers($search: String, $page: Float, $limit: Float) {
        users(search: $search, page: $page, limit: $limit) {
            ...UserTypeFragment
        }
    }
    ${UserTypeFragment}
`;

export const GET_ME = gql`
    query GetMe {
        me {
            ...UserTypeFragment
        }
    }
    ${UserTypeFragment}
`;
