import gql from 'graphql-tag';
import {AdsListingTypeFragment} from './adslisting.fragment';

export const ON_MAP_REGION = gql`
    query OnMapRegion($lat: Float!, $lon: Float!, zoom: Float) {
        data: onMapRegion(lon: $lon, lat: $lat, zoom: $zoom) {
            ...AdsListingTypeFragment
        }
    }
    ${AdsListingTypeFragment}
`;
