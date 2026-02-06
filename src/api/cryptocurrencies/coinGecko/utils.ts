import { config } from "@config";

const COIN_GECKO_API_KEY: string = process.env.COIN_GECKO_API_KEY || "";
const COIN_GECKO_BASE_URL = config.coinGeckoBaseUrl;

function checkAPIKey(): void {
  if (!COIN_GECKO_API_KEY) {
    throw new Error("COIN_GECKO_API_KEY environment variable is not set");
  }
}

export function getOptions(): RequestInit {
  checkAPIKey();
  return {
    method: "GET",
    cache: "no-store",
    headers: { x_cg_demo_api_key: COIN_GECKO_API_KEY },
  };
}

export async function handleCoinGeckoResponse<T = unknown>(
  res: Response,
): Promise<T> {
  if (!res.ok) {
    let errorMessage = `HTTP ${res.status}: ${res.statusText}`;

    try {
      const errorData = await res.json();
      errorMessage = errorData.error_message || errorMessage;
    } catch {}

    if (res.status === 429) {
      throw new Error(`429: ${errorMessage}`);
    }

    throw new Error(errorMessage);
  }

  return res.json();
}

export async function fetchCoinGecko<T = unknown>(
  url: string,
  options?: RequestInit,
): Promise<T> {
  const res = await fetch(`${COIN_GECKO_BASE_URL}${url}`, { ...options });
  return handleCoinGeckoResponse(res);
}
