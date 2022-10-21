import '../styles/global.css'
import type { AppProps } from 'next/app'
import { MovieProvider } from '../context/MoviesContext'
import { ModalCartContextProvider } from '../context/ModalCartContext'
import { ModalWishlistContextProvider } from '../context/ModalWishlistContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MovieProvider>
      <MovieProvider>
        <ModalCartContextProvider>
          <ModalWishlistContextProvider>
            <Component {...pageProps} />
          </ModalWishlistContextProvider>
        </ModalCartContextProvider>
      </MovieProvider>
    </MovieProvider>
  )
}

export default MyApp
