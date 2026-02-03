import { CryptocurrencyService } from "@/api/cryptocurrencies/service";

export default async function CryptoCurrencyList() {
  const cryptoItems = await CryptocurrencyService.fetchAll();

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
          {cryptoItems.map((crypto, i) => (
            <tr key={crypto.name}>
              <th>{i + 1}</th>
              <td>{crypto.name}</td>
              <td>{crypto.priceUSD}</td>
              <td>{crypto.usd24hChange}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
