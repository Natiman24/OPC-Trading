import { Inter, Lato, Fugaz_One } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lato",
});

const fugaz = Fugaz_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-fugaz",
});

export const metadata = {
  title: "OPC Trading",
  description:
    "company that sells,maintains and repairs printing tools and materials",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="./icon.png" sizes="any" />
      <body className={`${inter.variable} ${lato.variable} ${fugaz.variable}`}>
        {children}
      </body>
    </html>
  );
}
