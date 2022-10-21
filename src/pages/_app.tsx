import '../styles/global.css'
import type { AppProps } from 'next/app'
import { MovieProvider } from '../context/MoviesContext'
import { ModalContextProvider } from '../context/ModalContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MovieProvider>
      <MovieProvider>
        <ModalContextProvider>
          <Component {...pageProps} />
        </ModalContextProvider>
      </MovieProvider>
    </MovieProvider>
  )
}

export default MyApp
