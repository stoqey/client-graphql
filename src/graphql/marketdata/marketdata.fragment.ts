import gql from 'graphql-tag';

export interface MarketDataType {
    id?: string;
    name?: string;
    symbol: string;
    changePct?: number;
    change?: number;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    date: Date;
}

export interface MarketSymbolInfo {
    id?: string;
    symbol: string;
    name: string;
    change: number;
    changePct: number;
    icon: string;
    supply: string;
    totalVol: string;
    mktCap: string;
}

export const MarketDataTypeFragment = gql`
    fragment MarketDataTypeFragment on MarketDataType {
        id
        symbol
        volume
        change
        changePct
        open
        close
        high
        low
        date
    }
`;

export const MarketSymbolInfoFragment = gql`
    fragment MarketSymbolInfoFragment on MarketSymbolInfo {
        id
        symbol
        name
        change
        changePct
        icon
        supply
        totalVol
        mktCap
    }
`;
