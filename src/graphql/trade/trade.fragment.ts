import gql from 'graphql-tag';
import { ActionType, SymbolSecType, TradingEnvType, TradingStatusType } from '../../shared';

export interface TradeType {
  id?: string;
  owner: string;
  name?: string;

  symbol: string;
  secType: SymbolSecType;
  action: ActionType;
  exchange?: string;

  tradeEnv: TradingEnvType;
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

export const TradeTypeFragment = gql`
  fragment TradeTypeFragment on TradeType {
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
