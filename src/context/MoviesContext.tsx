import React, { createContext, useState, useContext } from 'react'
import { IMovieslist, MovieProviderProps, defaultMovieContextValues } from '../utils/types'

export const MoviesContext = createContext(defaultMovieContextValues)

export function MovieProvider({ children }: MovieProviderProps) {
  const [moviesList, setMoviesList] = useState<IMovieslist[]>([])
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(2)
  const [loadingPage, setLoadingPage] = useState(false);

  function handleAddItemToCart(id: number) {
    const tempMovies = [...moviesList]
    const selectedMovie = tempMovies.find((movie) => movie.id === id)

    if(selectedMovie){
      selectedMovie.inCart = true
      setMoviesList(tempMovies)
    }
  }

  function handleToggleItemToWishlist(id: number) {
    const tempMovies = [...moviesList]
    const selectedMovie = tempMovies.find((movie) => movie.id === id)

    if(selectedMovie){
      selectedMovie.wishList = !selectedMovie.wishList
      setMoviesList(tempMovies)
    }
  }

  function handleRemoveItemToCart(id: number){
    const tempMovies = [...moviesList]
    const selectedMovie = tempMovies.find((movie) => movie.id === id)

    if(selectedMovie){
      selectedMovie.inCart = false
      setMoviesList(tempMovies)
    }
  }

  return (
    <MoviesContext.Provider
      value={{
        moviesList,
        setMoviesList,
        search,
        setSearch,
        loadingPage,
        setLoadingPage,
        currentPage,
        setCurrentPage,
        handleAddItemToCart,
        handleToggleItemToWishlist,
        handleRemoveItemToCart
      }}
    >
      {children}
    </MoviesContext.Provider>
  )
}

export function useMovies() {
  const context = useContext(MoviesContext)

  const { moviesList, setMoviesList, handleAddItemToCart, handleToggleItemToWishlist, search, setSearch, loadingPage, setLoadingPage, currentPage, setCurrentPage, handleRemoveItemToCart } = context

  return { moviesList, setMoviesList, handleAddItemToCart, handleToggleItemToWishlist, search, setSearch, loadingPage, setLoadingPage, currentPage, setCurrentPage, handleRemoveItemToCart }
}
