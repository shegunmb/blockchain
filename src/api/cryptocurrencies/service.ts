import { CryptocurrencyItem } from "@/domain/cryptocurrencies/types";
import { fetchCryptoCurrenciesFromCoinGecko } from "./coinGecko";

export class CryptocurrencyService {
  static async fetchAll(): Promise<CryptocurrencyItem[]> {
    return fetchCryptoCurrenciesFromCoinGecko();
  }
}
