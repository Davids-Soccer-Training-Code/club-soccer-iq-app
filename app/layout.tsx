import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Soccer IQ",
  description: "A simple soccer IQ check-in for youth players.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
