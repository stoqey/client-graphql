import gql from 'graphql-tag';
import {TradingEnvType, IOrderType, ActionType} from '../shared';

export interface OrderType {
    id?: string;
    tradeEnv: TradingEnvType;
    owner: string;
    createdAt?: Date;
    updatedAt?: Date;
    deleted?: boolean;
    stop?: boolean;
    params: [IOrderType];
    gtc?: boolean;
    gfd?: boolean;
    gtd?: boolean;
    action: ActionType;
    symbol: string;
    instrument: string;
    clientId: string;
    type: string;
    qty: number;
    filledQty: number;
    price: number;
    stopPrice: number;
    canceled: boolean;
    date: Date;
    workedOn: Date;
}

export const OrderTypeFragment = gql`
    fragment OrderTypeFragment on OrderType {
        id
        owner
        createdAt
        updatedAt
        deleted
        stop
        params
        gtc
        gfd
        gtd
        action
        symbol
        instrument
        clientId
        type
        qty
        filledQty
        price
        stopPrice
        canceled
        date
        workedOn
    }
`;
