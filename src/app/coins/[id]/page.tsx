import { LinkButton } from "@/components";
import type { CryptocurrencyName } from "@/domain/cryptocurrencies/types";
import { CoinDetailsCard } from "@/features/cryptocurrencies";

type Params = Promise<{ id: CryptocurrencyName }>;

export default async function Details({ params }: { params: Params }) {
  const { id } = await params;

  return (
    <div className="m-8">
      <LinkButton href="/">Back</LinkButton>
      <CoinDetailsCard id={id} />
    </div>
  );
}
