import { Link } from "@/components";
import { CryptocurrencyService } from "@/api/cryptocurrencies/service";

export default async function Tbody() {
  const cryptoItems = await CryptocurrencyService.fetchCryptocurrencies([
    "bitcoin",
    "ethereum",
    "cardano",
    "dogecoin",
    "solana",
  ]);

  return (
    <>
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
    </>
  );
}
