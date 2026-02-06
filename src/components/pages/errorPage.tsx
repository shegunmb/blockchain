import { LinkButton } from "../navigation";

export default function ErrorPage() {
  return (
    <div className="m-8 flex flex-col items-center ">
      <div className="text-primary lg:text-9xl text-6xl py-4">Oops...</div>
      <div className="text-3xl text-center">Something went wrong</div>
      <LinkButton href="/">Back Home</LinkButton>
    </div>
  );
}
