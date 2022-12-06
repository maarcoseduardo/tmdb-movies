import React, { createContext, useState, useContext } from 'react'
import { IMovieslist, MovieProviderProps, defaultMovieCartContextValues } from '../utils/types'

export const MoviesInCartContext = createContext(defaultMovieCartContextValues)

export function MovieInCartProvider({ children }: MovieProviderProps) {
  const [moviesInCart, setMoviesInCart] = useState<IMovieslist[]>([])
  const [moviesQuantityInCart, setMoviesQuantityInCart] = useState(1);

  function handleAddItemToCart(movie: IMovieslist) {
    const tempMovies = [...moviesInCart]
    const selectedMovies = tempMovies.find(movieInArray => movieInArray.id === movie.id)

    if (!movie.inCart) {
      movie.inCart = true
      movie.quantity = 1;
      setMoviesInCart([...tempMovies, movie])
    }
  }

  function handleRemoveItemToCart(movie: IMovieslist) {
    const tempMovies = [...moviesInCart]
    const selectedMovies = tempMovies.filter((movieInArray) => movieInArray !== movie)

    movie.inCart = false
    setMoviesInCart(selectedMovies)
  }

  function handleIncrementQuantityOnMovies(movie: IMovieslist) {
    const tempMovies = [...moviesInCart]
    const selectedMovies = tempMovies.filter(movieInArray => movieInArray === movie)

    selectedMovies[0].quantity += 1

    setMoviesInCart(tempMovies)
  }

  function handleDecrementQuantityOnMovies(movie: IMovieslist) {
    const tempMovies = [...moviesInCart]
    const selectedMovies = tempMovies.filter(movieInArray => movieInArray === movie)

    selectedMovies[0].quantity -= 1

    if (selectedMovies[0].quantity <= 0) {
      handleRemoveItemToCart(selectedMovies[0])
    } else {
      setMoviesInCart(tempMovies)
    }
  }

  return (
    <MoviesInCartContext.Provider
      value={{
        moviesInCart,
        setMoviesInCart,
        handleAddItemToCart,
        handleRemoveItemToCart,
        handleIncrementQuantityOnMovies,
        handleDecrementQuantityOnMovies
      }}
    >
      {children}
    </MoviesInCartContext.Provider>
  )
}

export function useMoviesInCart() {
  const context = useContext(MoviesInCartContext)

  const { moviesInCart, setMoviesInCart, handleAddItemToCart, handleRemoveItemToCart, handleIncrementQuantityOnMovies, handleDecrementQuantityOnMovies } = context

  return { moviesInCart, setMoviesInCart, handleAddItemToCart, handleRemoveItemToCart, handleIncrementQuantityOnMovies, handleDecrementQuantityOnMovies }
}