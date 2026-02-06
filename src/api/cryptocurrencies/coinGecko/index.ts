import type {
  CryptocurrencyAPI,
  CryptocurrencyChartAPI,
  CryptocurrencyDetails,
  CryptocurrencyItem,
  CryptocurrencyName,
} from "@/domain/cryptocurrencies/types";
import { resolveCryptocurrencies } from "../resolver";
import { fetchCoinGecko, getOptions } from "./utils";

export function fetchCryptocurrenciesFromCoinGecko(
  cryptoList: CryptocurrencyName[],
): Promise<CryptocurrencyItem[]> {
  const options = getOptions();

  const cryptosToFetch = cryptoList.join(",");
  return fetchCoinGecko<Record<string, CryptocurrencyAPI>>(
    `/simple/price?vs_currencies=usd&ids=${cryptosToFetch}&include_24hr_change=true&precision=2`,
    options,
  ).then(resolveCryptocurrencies);
}

export async function fetchCryptocurrencyDetailsFromCoinGecko(
  coinId: CryptocurrencyName,
): Promise<CryptocurrencyDetails> {
  const SIMPLE_PRICE_URL = `/simple/price?ids=${coinId}&vs_currencies=usd&include_24hr_change=true`;
  const CHART_PRICES_URL = `/coins/${coinId}/market_chart?vs_currency=usd&days=1&interval=daily&precision=2`;

  const options = getOptions();
  const [simpleData, chartData] = await Promise.all([
    fetchCoinGecko<Record<string, CryptocurrencyAPI>>(
      SIMPLE_PRICE_URL,
      options,
    ),
    fetchCoinGecko<CryptocurrencyChartAPI>(CHART_PRICES_URL, options),
  ]);

  const currentPrice = simpleData[coinId]?.usd;
  const prices = chartData.prices?.map(([, price]: [number, number]) => price);

  if (!prices || prices.length === 0) {
    throw new Error("No price data available");
  }

  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  return { name: coinId, currentPrice, minPrice, maxPrice };
}
