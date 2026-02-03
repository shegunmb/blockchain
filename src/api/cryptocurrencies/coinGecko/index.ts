import { config } from "@config";
import type { CryptocurrencyItem } from "@/domain/cryptocurrencies/types";
import { resolveCryptocurrencies } from "../resolver";

const COIN_GECKO_BASE_URL = config.coinGeckoBaseUrl;
const COIN_GECKO_API_KEY: string = process.env.COIN_GECKO_API_KEY || "";

export function fetchCryptocurrenciesFromCoinGecko(): Promise<
  CryptocurrencyItem[]
> {
  if (!COIN_GECKO_API_KEY) {
    throw new Error("COIN_GECKO_API_KEY environment variable is not set");
  }

  const options: RequestInit = {
    method: "GET",
    cache: "no-store",
    headers: { x_cg_demo_api_key: COIN_GECKO_API_KEY },
  };
  return fetch(
    `${COIN_GECKO_BASE_URL}/simple/price?vs_currencies=usd&ids=bitcoin,ethereum,dogecoin,cardano,solana&include_24hr_change=true`,
    options,
  )
    .then((res) => res.json())
    .then(resolveCryptocurrencies);
}
