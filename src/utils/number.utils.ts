import random from 'lodash/random';
import {ActionType} from '../graphql';

export const randomNumber = (min?: number, max?: number): number => {
    return random(min || 1000, max || 100000);
};

// https://www.investopedia.com/ask/answers/how-do-you-calculate-percentage-gain-or-loss-investment/

/**
 * Get Profit percentage gained
 * @param startPrice
 * @param endPrice
 */
export const getPercentageGain = (startPrice: number, endPrice: number): number => {
    const results = ((endPrice - startPrice) / startPrice) * 100;
    return Number.isNaN(results) ? 0 : results;
};

/**
 * Get Profit from trade
 * @param tradeType trade type sell or buy
 * @param startPrice
 * @param endPrice
 */
export const getProfitFromTrade = (
    tradeType: ActionType,
    startPrice: number,
    endPrice: number
): number => {
    if (tradeType === ActionType.SELL) {
        return getPercentageGain(endPrice, startPrice);
    }
    return getPercentageGain(startPrice, endPrice);
};
