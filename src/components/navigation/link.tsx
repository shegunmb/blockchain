import NextLink from "next/link";

interface LinkProps extends React.ComponentProps<typeof NextLink> {
  children: React.ReactNode;
}

export default function Link({ children, ...props }: LinkProps) {
  return (
    <NextLink {...props} className="link hover:text-primary font-bold">
      {children}
    </NextLink>
  );
}
