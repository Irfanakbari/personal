import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Irfan Akbari Habibi",
  description: "Personal website of Irfan Akbari Habibi",
};

export default function RootLayout({ children }: never) {
  return (
      <html lang="en">
      <body className={inter.className}>{children}</body>
      </html>
  );
}