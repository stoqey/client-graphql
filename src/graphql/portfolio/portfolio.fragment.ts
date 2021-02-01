import gql from 'graphql-tag';
import {ActionType, SymbolSecType, TradingEnvType, TradingStatusType} from '../shared';

export interface PortfolioType {
    id?: string;
    owner: string;
    name?: string;

    symbol: string;
    secType: SymbolSecType;
    action: ActionType;
    exchange?: string;

    tradeEnv?: TradingEnvType;
    status?: TradingStatusType;
    size: number; // number of shares
    filled?: number; // profit and loss
    remaining?: number; // profit and loss
    pnl?: number; // profit and loss
    averageCost?: number;
    marketPrice?: number;
    entryTime: Date; // time when entered trade
    exitTime?: Date; // when closed
    createdAt?: Date;
    updatedAt?: Date;
}

export const PortfolioTypeFragment = gql`
    fragment PortfolioTypeFragment on PortfolioType {
        id
        owner
        name
        symbol
        secType
        action
        exchange
        tradeEnv
        status
        size
        filled
        remaining
        pnl
        averageCost
        marketPrice
        entryTime
        exitTime
        createdAt
        updatedAt
        deleted
    }
`;
