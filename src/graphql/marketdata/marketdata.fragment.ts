import gql from 'graphql-tag';

export interface MarketDataType {
  id?: string;
  symbol: string;
  volume: number;
  open: number;
  close: number;
  high: number;
  low: number;
  date: Date;
}

export interface MarketSymbolInfo {
  id?: string;
  symbol: string;
  volume: number;
  open: number;
  close: number;
  high: number;
  low: number;
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
