import gql from 'graphql-tag';
import {GeoLocationType} from '../shared';

export interface AdsListingType {
    id: string;
    owner?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deleted?: boolean;
    adId?: string;
    name?: string;
    info?: string;
    phone?: string;
    email?: string;
    age?: number;
    city?: string;
    ethnicity?: string;
    availability?: string;
    height?: string;
    weight?: string;
    hair?: string;
    eye?: string;
    price?: number;
    photos?: [string];
    geo?: GeoLocationType;
}

export const AdsListingTypeFragment = gql`
    fragment AdsListingTypeFragment on AdsListingType {
        id
        tradeEnv
        owner
        createdAt
        updatedAt
        deleted
        adId
        name
        info
        phone
        email
        age
        city
        ethnicity
        availability
        height
        weight
        hair
        eye
        price
        photos
        geo {
            lat
            lon
        }
    }
`;
