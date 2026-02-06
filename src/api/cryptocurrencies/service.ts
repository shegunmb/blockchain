import {
  CryptocurrencyDetails,
  CryptocurrencyItem,
  CryptocurrencyName,
} from "@/domain/cryptocurrencies/types";
import {
  fetchCryptocurrencyDetailsFromCoinGecko,
  fetchCryptocurrenciesFromCoinGecko,
} from "./coinGecko";

export class CryptocurrencyService {
  static async fetchCryptocurrencies(
    cryptos: CryptocurrencyName[],
  ): Promise<CryptocurrencyItem[]> {
    return fetchCryptocurrenciesFromCoinGecko(cryptos);
  }

  static async fetchCoinDetails(
    coinName: CryptocurrencyName,
  ): Promise<CryptocurrencyDetails> {
    return fetchCryptocurrencyDetailsFromCoinGecko(coinName);
  }
}
