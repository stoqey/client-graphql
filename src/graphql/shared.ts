import gql from 'graphql-tag';

export interface ResType {
    success: boolean;
    message?: string;
    data?: any;
}

export const ResTypeFragment = gql`
    fragment ResTypeFragment on ResType {
        success
        message
        data
    }
`;

/**
 * Register enums from here
 */
export enum SymbolSecType {
    AI = 'ai',
    CRYPTO = 'crypto',
    STOCK = 'stock',
    FOREX = 'forex',
}

export enum TradingEnvType {
    LIVE = 'live',
    PAPER = 'paper',
}

export enum ActionType {
    BUY = 'BUY',
    SELL = 'SELL',
}

export enum StatusType {
    DRAFT = 'draft',
    SUBMITTED = 'submitted',
    PENDING = 'pending',
    CONFIRMED = 'confirmed',
    PROCESSING = 'processing',
    SUCCESS = 'success',
    FAIL = 'fail',
    CANCELED = 'canceled',
    REJECTED = 'rejected',
}

export enum TradingStatusType {
    PENDING = 'pending',
    LIVE = 'live',
    COMPLETE = 'complete',
    DRAFT = 'draft',
    FAIL = 'fail',
}

export enum WithdrawOrDeposit {
    WITHDRAW = 'withdraw',
    DEPOSIT = 'deposit',
}

export enum WithdrawPaymentMethodType {
    CRYPTO = 'crypto',
    BANK = 'bank',
    ETRANSFER = 'etransfer',
    MOBILEMONEY = 'mobilemoney',
}

export enum IOrderType {
    MARKET = 'market',
    LIMIT = 'limit',
}
