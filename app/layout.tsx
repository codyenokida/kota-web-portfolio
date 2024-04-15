import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Kota Cody Enokida Portfolio App",
  description: "Software Engineer Portfolio App to showcase things I've built",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
