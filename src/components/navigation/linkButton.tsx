import Link from "next/link";

interface LinkProps extends React.ComponentProps<typeof Link> {
  children: string;
}

export default function LinkButton({ children, ...props }: LinkProps) {
  return (
    <Link
      {...props}
      className="m-8 bg-primary rounded-full px-6 py-2 font-bold hover:bg-black"
    >
      {children}
    </Link>
  );
}
