import gql from 'graphql-tag';
import {LoginResponseTypeFragment} from './user.fragment';

export const PHONE_LOGIN_MUTATION = gql`
    mutation PhoneLogin($phone: String!, $firebaseToken: String!, $createNew: Boolean) {
        data: phoneLogin(phone: $phone, firebaseToken: $firebaseToken, createNew: $createNew) {
            ...LoginResponseTypeFragment
        }
    }
    ${LoginResponseTypeFragment}
`;

export const LOGIN_MUTATION = gql`
    mutation Login($password: String!, $email: String!) {
        data: login(password: $password, email: $email) {
            ...LoginResponseTypeFragment
        }
    }
    ${LoginResponseTypeFragment}
`;

export const REGISTER_MUTATION = gql`
    mutation Register($user: RegisterArgs!) {
        data: register(user: $user) {
            ...LoginResponseTypeFragment
        }
    }
    ${LoginResponseTypeFragment}
`;

export const FORGOTPASSWORD_MUTATION = gql`
    mutation ForgotPassword($user: ForgotPasswordArgs!) {
        data: forgotPassword(user: $user) {
            ...LoginResponseTypeFragment
        }
    }
    ${LoginResponseTypeFragment}
`;

export const CHANGEPASSWORD_MUTATION = gql`
    mutation ChangePassword($user: ChangePasswordArgs!) {
        data: changePassword(user: $user) {
            ...LoginResponseTypeFragment
        }
    }
    ${LoginResponseTypeFragment}
`;
