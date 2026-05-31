import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Coach David's Soccer Tactical App",
  description: "A tactical learning app for Coach David's soccer players.",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
