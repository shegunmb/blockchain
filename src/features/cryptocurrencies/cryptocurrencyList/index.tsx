import Thead from "./thead";
import Tbody from "./tbody";
import { Table } from "@/components";

export default function CryptocurrencyList() {
  return <Table thead={<Thead />} tbody={<Tbody />} />;
}
