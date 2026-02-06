export default async function Table({
  thead,
  tbody,
}: {
  thead: React.ReactElement;
  tbody: React.ReactElement;
}) {
  return (
    <div className="overflow-x-auto rounded-box border border-neutral-300 bg-base-100 m-8 ">
      <table className="table">
        <thead>{thead}</thead>
        <tbody>{tbody}</tbody>
      </table>
    </div>
  );
}
