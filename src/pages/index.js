import Image from "next/image";
import localFont from "next/font/local";
import Layout from "@/components/Layout";
import Hero from "@/views/hero";
import Products from "@/views/products";
import BuyNow from "@/views/buynow";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <Layout>
      <Hero/>
      <Products/>
      <BuyNow/>
    </Layout>
  );
}
