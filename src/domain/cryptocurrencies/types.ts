export type CryptocurrencyItem = {
  name: string;
  priceUSD: number;
  usd24hChange: number;
};

export type CryptocurrencyAPI = {
  usd: number;
  usd_24h_change: number;
};

export type CryptocurrencyName =
  | "bitcoin"
  | "ethereum"
  | "dogecoin"
  | "cardano"
  | "solana";

export type CryptocurrencyChartAPI = {
  prices: [time: number, price: number][];
  market_caps: [time: number, price: number][];
  total_volumes: [time: number, price: number][];
};

export type CryptocurrencyDetails = {
  name: CryptocurrencyName;
  currentPrice: number;
  minPrice: number;
  maxPrice: number;
};
