export default function CryptoCurrencyList() {
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
          {data.map((crypto, i) => (
            <tr key={crypto.name}>
              <th>{i + 1}</th>
              <td>{crypto.name}</td>
              <td>{crypto.price}</td>
              <td>{crypto.changeTwentyFour}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const data = [
  {
    name: "Bitcoin",
    price: "86.000$",
    changeTwentyFour: "0.4%",
  },
  {
    name: "Ethereum",
    price: "8.000$",
    changeTwentyFour: "0.8%",
  },
  {
    name: "Dogecoin",
    price: "16.000$",
    changeTwentyFour: "2.1%",
  },
  {
    name: "Cardano",
    price: "23.000$",
    changeTwentyFour: "0.3%",
  },
  {
    name: "Solana",
    price: "42.000$",
    changeTwentyFour: "1.1%",
  },
];
