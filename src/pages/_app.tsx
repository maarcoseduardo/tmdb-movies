import "../styles/global.css";
import type { AppProps } from "next/app";
import { MovieProvider } from "../context/MoviesContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MovieProvider>
      <Component {...pageProps} />
    </MovieProvider>
  );
}

export default MyApp;
