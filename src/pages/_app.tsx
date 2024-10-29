import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "../styles/Navbar.css";




export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
