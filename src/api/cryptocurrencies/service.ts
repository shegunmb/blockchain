import {
  CryptocurrencyItem,
  CryptocurrencyName,
} from "@/domain/cryptocurrencies/types";
import { fetchCryptocurrenciesFromCoinGecko } from "./coinGecko";

export class CryptocurrencyService {
  static async fetchCryptocurrencies(
    cryptos: CryptocurrencyName[],
  ): Promise<CryptocurrencyItem[]> {
    return fetchCryptocurrenciesFromCoinGecko(cryptos);
  }
}
