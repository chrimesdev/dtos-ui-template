import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "UI template",
  description: "A UI template for Screening services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="js-enabled">{children}</body>
    </html>
  );
}
