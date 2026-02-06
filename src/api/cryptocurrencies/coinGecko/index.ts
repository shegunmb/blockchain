import type {
  CryptocurrencyAPI,
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
