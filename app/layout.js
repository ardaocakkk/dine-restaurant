import { Inter } from "next/font/google";
import "./globals.css";
import {League_Spartan} from "next/font/google";
import Providers from "@/app/Providers";

const inter = Inter({ subsets: ["latin"] });
const leagueSpartan = League_Spartan({ subsets: ["latin"] });
export const metadata = {
  title: "Dine Restaurant",
  description: "Dine Restaurant is a premium restaurant located in the heart of the city. We provide a unique dining experience for our customers. Our menu is updated every season.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={leagueSpartan.className}>
      <Providers>{children}</Providers>
      </body>
    </html>
  );
}
