export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="card bg-base-500 w-fit shadow-sm border m-8 self-center">
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
}
