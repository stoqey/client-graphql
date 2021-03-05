import gql from 'graphql-tag';
import {ActionType} from '../shared';

export interface TradeType {
    id?: string;
    action: ActionType;
    buyer: string;
    seller: string;
    symbol: string;
    instrument: string;
    qty: number;
    price: number;
    total?: number;
    rejected?: boolean;
    bidOrderId: string;
    askOrderId: string;

    createdAt?: Date;
    updatedAt?: Date;
}

export const TradeTypeFragment = gql`
    fragment TradeTypeFragment on TradeType {
        id
        action
        buyer
        seller
        symbol
        instrument
        qty
        price
        rejected
        bidOrderId
        askOrderId
        createdAt
        updatedAt
    }
`;
