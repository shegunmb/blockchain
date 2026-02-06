import { CryptocurrencyService } from "@/api/cryptocurrencies/service";
import { Card } from "@/components";
import type {
  CryptocurrencyDetails,
  CryptocurrencyName,
} from "@/domain/cryptocurrencies/types";
import { coinIds } from "@/domain/cryptocurrencies/utils";

export default async function CoinDetails({ id }: { id: CryptocurrencyName }) {
  if (!coinIds.includes(id)) {
    throw new Error(`Cryptocurrency "${id}" not found`);
  }

  const cryptoItem: CryptocurrencyDetails =
    await CryptocurrencyService.fetchCoinDetails(id);

  return (
    <Card>
      <h2 className="card-title text-primary">{id}</h2>
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
    </Card>
  );
}
