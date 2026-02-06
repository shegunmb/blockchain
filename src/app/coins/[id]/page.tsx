import { CryptocurrencyService } from "@/api/cryptocurrencies/service";
import { LinkButton } from "@/components";
import type {
  CryptocurrencyDetails,
  CryptocurrencyName,
} from "@/domain/cryptocurrencies/types";
import { coinIds } from "@/domain/cryptocurrencies/utils";

type Params = Promise<{ id: CryptocurrencyName }>;

export default async function Details({ params }: { params: Params }) {
  const { id: coinName } = await params;

  if (!coinIds.includes(coinName)) {
    throw new Error(`Cryptocurrency "${coinName}" not found`);
  }

  const cryptoItem: CryptocurrencyDetails =
    await CryptocurrencyService.fetchCoinDetails(coinName);

  return (
    <div className="m-8">
      <LinkButton href="/">Back</LinkButton>

      <div className="w-full flex items-center justify-center">
        <div className="card bg-base-500 w-fit shadow-sm border m-8 self-center">
          <div className="card-body">
            <h2 className="card-title text-primary">{coinName}</h2>
            <div className="flex flex-wrap">
              <div className="m-4">
                <div className="font-bold">Current Price</div>
                <p className="text-lg">{cryptoItem.currentPrice}</p>
              </div>
              <div className="m-4">
                <div className="font-bold">Lowest Price (24h) </div>
                <p className="text-lg">{cryptoItem.minPrice}</p>
              </div>
              <div className="m-4">
                <div className="font-bold">Highest Price (24h)</div>
                <p className="text-lg">{cryptoItem.maxPrice}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
