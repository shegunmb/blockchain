export type CryptocurrencyItem = {
  name: string;
  priceUSD: number;
  usd24hChange: number;
};

export type CryptocurrencyAPI = {
  usd: number;
  usd_24h_change: number;
};
