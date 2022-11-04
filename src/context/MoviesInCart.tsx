import React, { createContext, useState, useContext } from 'react'
import { IMovieslist, MovieProviderProps, defaultMovieCartContextValues } from '../utils/types'

export const MoviesInCartContext = createContext(defaultMovieCartContextValues)

export function MovieInCartProvider({ children }: MovieProviderProps) {
  const [moviesInCart, setMoviesInCart] = useState<IMovieslist[]>([])

  function handleAddItemToCart(movie: IMovieslist) {
    const tempMovies = [...moviesInCart]
    const selectedMovies = tempMovies.find(movieInArray => movieInArray.id === movie.id)
    
    movie.inCart = true
    setMoviesInCart([...tempMovies, movie])
  }

  function handleRemoveItemToCart(movie: IMovieslist){
    const tempMovies = [...moviesInCart]
    const selectedMovies = tempMovies.filter((movieInArray) => movieInArray !== movie)

    movie.inCart = false
    setMoviesInCart(selectedMovies)
  }

  return (
    <MoviesInCartContext.Provider
      value={{
        moviesInCart,
        setMoviesInCart,
        handleAddItemToCart,
        handleRemoveItemToCart
      }}
    >
      {children}
    </MoviesInCartContext.Provider>
  )
}

export function useMoviesInCart() {
  const context = useContext(MoviesInCartContext)

  const { moviesInCart, setMoviesInCart, handleAddItemToCart, handleRemoveItemToCart } = context

  return { moviesInCart, setMoviesInCart, handleAddItemToCart, handleRemoveItemToCart }
}
