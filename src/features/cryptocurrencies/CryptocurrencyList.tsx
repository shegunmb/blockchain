import { Link } from "@/components";
import { CryptocurrencyService } from "@/api/cryptocurrencies/service";

export default async function CryptocurrencyList() {
  const cryptoItems = await CryptocurrencyService.fetchCryptocurrencies([
    "bitcoin",
    "ethereum",
    "cardano",
    "dogecoin",
    "solana",
  ]);

  return (
    <div className="overflow-x-auto rounded-box border border-neutral-300 bg-base-100 m-8 ">
      <table className="table">
        <thead>
          <tr className="text-primary">
            <th></th>
            <th>Name</th>
            <th>Price (USD)</th>
            <th>% Change (24H)</th>
          </tr>
        </thead>
        <tbody>
          {cryptoItems.map((crypto, i) => {
            const colorFor24hChange =
              crypto.usd24hChange > 0 ? "text-success" : "text-error";
            const COIN_DETAILS_URL = `coins/${crypto.name}`;
            return (
              <tr key={crypto.name}>
                <th>{i + 1}</th>
                <td>
                  <Link href={COIN_DETAILS_URL}>{crypto.name} </Link>
                </td>
                <td>{crypto.priceUSD}</td>
                <td className={colorFor24hChange}>{crypto.usd24hChange}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
