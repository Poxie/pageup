import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

const title = process.env.NEXT_PUBLIC_WEBSITE_NAME;
const description = "Vi hjälper dig att skapa en skräddarsydd hemsida som speglar ditt varumärke. Från idé till färdig hemsida – låt oss göra jobbet enkelt för dig!";
export const metadata: Metadata = {
  title,
  description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
