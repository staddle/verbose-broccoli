export const getPriceInEth = (price: number): string => {
    return (price / 1000000000000000000).toFixed(5);
};