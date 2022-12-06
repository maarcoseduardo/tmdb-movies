import '../styles/global.css'
import type { AppProps } from 'next/app'
import { MovieProvider } from '../context/MoviesContext'
import { ModalCartContextProvider } from '../context/ModalCartContext'
import { ModalWishlistContextProvider } from '../context/ModalWishlistContext'
import { MovieInCartProvider } from '../context/MoviesInCart'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MovieProvider>
      <ModalCartContextProvider>
        <MovieInCartProvider>
          <ModalWishlistContextProvider>
            <Component {...pageProps} />
          </ModalWishlistContextProvider>
        </MovieInCartProvider>
      </ModalCartContextProvider>
    </MovieProvider>
  )
}

export default MyApp
