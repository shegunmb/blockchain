import type {
  CryptocurrencyItem,
  CryptocurrencyAPI,
} from "@/domain/cryptocurrencies/types";

export function resolveCryptocurrencies(
  cryptosFromApi: Record<string, CryptocurrencyAPI>,
): CryptocurrencyItem[] {
  const resolvedCryptos: CryptocurrencyItem[] = [];
  for (const [key, value] of Object.entries(cryptosFromApi)) {
    resolvedCryptos.push({
      name: key,
      priceUSD: value.usd,
      usd24hChange: value.usd_24h_change,
    });
  }
  return resolvedCryptos;
}
