import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { HomeListContextProvider } from "../utils/HomeListContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HomeListContextProvider>
      <Component {...pageProps} />
    </HomeListContextProvider>
  );
}
