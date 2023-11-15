import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { HomeListContextProvider } from "../utils/HomeListContext";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HomeListContextProvider>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </HomeListContextProvider>
  );
}
