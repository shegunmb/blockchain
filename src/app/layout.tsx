import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layouts";

export const metadata: Metadata = {
  title: "Blockchain technical test",
  description: "Front-end test to join the crypto crew",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
