import { CryptocurrencyItem } from "@/domain/cryptocurrencies/types";
import { fetchCryptocurrenciesFromCoinGecko } from "./coinGecko";

export class CryptocurrencyService {
  static async fetchAll(): Promise<CryptocurrencyItem[]> {
    return fetchCryptocurrenciesFromCoinGecko();
  }
}
