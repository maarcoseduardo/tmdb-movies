import React, { createContext, useState, useContext } from 'react'
import {
  IMovieslist,
  MovieProviderProps,
  defaultMovieCartContextValues,
} from '../utils/types'
import { getPrice } from '../utils/fn'

export const MoviesInCartContext = createContext(defaultMovieCartContextValues)

export function MovieInCartProvider({ children }: MovieProviderProps) {
  const [moviesInCart, setMoviesInCart] = useState<IMovieslist[]>([])
  const [priceTotalOfMovies, setPriceTotalOfMovies] = useState(0)
  let sumMoviesReduce

  function handleAddItemToCart(movie: IMovieslist) {
    const tempMovies = [...moviesInCart]

    if (!movie.inCart) {
      const price = getPrice(movie.vote_average)

      movie.inCart = true
      movie.quantity = 1
      movie.price = price
      movie.total = movie.price
      setMoviesInCart([...tempMovies, movie])

      const selectedMoviesTotal = tempMovies.map((movies) => movies.total)
      sumMoviesReduce = selectedMoviesTotal.reduce((sum: any, count: any) => sum + count, movie.price)
      setPriceTotalOfMovies(sumMoviesReduce)
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
    const selectedMovies = tempMovies.filter((movieInArray) => movieInArray === movie)

    selectedMovies[0].quantity += 1
    selectedMovies[0].total = selectedMovies[0].quantity * selectedMovies[0].price
    setMoviesInCart(tempMovies)

    const selectedMoviesTotal = tempMovies.map((movies) => movies.total)
    sumMoviesReduce = selectedMoviesTotal.reduce((sum: any, count: any) => sum + count,0)
    setPriceTotalOfMovies(sumMoviesReduce)
  }

  function handleDecrementQuantityOnMovies(movie: IMovieslist) {
    const tempMovies = [...moviesInCart]
    const selectedMovies = tempMovies.filter(
      (movieInArray) => movieInArray === movie,
    )

    selectedMovies[0].quantity -= 1
    selectedMovies[0].total = selectedMovies[0].quantity * selectedMovies[0].price

    if (selectedMovies[0].quantity <= 0) {
      handleRemoveItemToCart(selectedMovies[0])

      const selectedMoviesTotal = tempMovies.map((movies) => movies.total)
      sumMoviesReduce = selectedMoviesTotal.reduce((sum: any, count: any) => sum + count,0)
      setPriceTotalOfMovies(sumMoviesReduce)
    } else {
      setMoviesInCart(tempMovies)
      
      const selectedMoviesTotal = tempMovies.map((movies) => movies.total)
      sumMoviesReduce = selectedMoviesTotal.reduce((sum: any, count: any) => sum + count,0)
      setPriceTotalOfMovies(sumMoviesReduce)
    }
  }

  return (
    <MoviesInCartContext.Provider
      value={{
        moviesInCart,
        setMoviesInCart,
        priceTotalOfMovies,
        setPriceTotalOfMovies,
        handleAddItemToCart,
        handleRemoveItemToCart,
        handleIncrementQuantityOnMovies,
        handleDecrementQuantityOnMovies,
      }}
    >
      {children}
    </MoviesInCartContext.Provider>
  )
}

export function useMoviesInCart() {
  const context = useContext(MoviesInCartContext)

  const {
    moviesInCart,
    setMoviesInCart,
    priceTotalOfMovies,
    setPriceTotalOfMovies,
    handleAddItemToCart,
    handleRemoveItemToCart,
    handleIncrementQuantityOnMovies,
    handleDecrementQuantityOnMovies,
  } = context

  return {
    moviesInCart,
    setMoviesInCart,
    priceTotalOfMovies,
    setPriceTotalOfMovies,
    handleAddItemToCart,
    handleRemoveItemToCart,
    handleIncrementQuantityOnMovies,
    handleDecrementQuantityOnMovies,
  }
}
