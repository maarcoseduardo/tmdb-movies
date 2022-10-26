import React, { createContext, useState, useContext, ReactNode } from 'react'

interface MovieProviderProps {
  children: ReactNode
}

interface MoviesListResponse {
  id: number
  genre_ids: number[]
  title: string
  poster_path: string
  release_date: string
  quantity?: number
  price?: string
  inCart?: boolean
  wishList?: boolean
}

interface MovieContextValues {
  moviesList: MoviesListResponse[]
  setMoviesList: React.Dispatch<React.SetStateAction<MoviesListResponse[]>>
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
  handleAddItemToCart: (id: number) => void
  handleAddItemToWishList: (id: number) => void
}

const defaultMovieContextValues: MovieContextValues = {
  moviesList: [],
  setMoviesList: () => [],
  search: '',
  setSearch: () => '',
  handleAddItemToCart: (id: number) => {},
  handleAddItemToWishList: (id: number) => {}
}

export const MoviesContext = createContext(defaultMovieContextValues)

export function MovieProvider({ children }: MovieProviderProps) {
  const [moviesList, setMoviesList] = useState<MoviesListResponse[]>([])
  const [search, setSearch] = useState('');

  function handleAddItemToCart(id: number) {
    const tempMovies = [...moviesList]
    const selectedMovie = tempMovies.find((movie) => movie.id === id)

    if(selectedMovie){
      selectedMovie.inCart = true
    }

    console.log(selectedMovie);
    
  }
  function handleAddItemToWishList(id: number) {
    const tempMovies = [...moviesList]
    const selectedMovie = tempMovies.find((movie) => movie.id === id)

    if(selectedMovie){
      selectedMovie.wishList = true
    }
    console.log(selectedMovie);
    
  }

  function handleIncrementItemInCart(id: number) {}
  function handleDecrementItemInCart(id: number) {}
  function handleRemoveItemToCart(id: number) {}

  return (
    <MoviesContext.Provider
      value={{
        moviesList,
        setMoviesList,
        search,
        setSearch,
        handleAddItemToCart,
        handleAddItemToWishList
      }}
    >
      {children}
    </MoviesContext.Provider>
  )
}

export function useMovies() {
  const context = useContext(MoviesContext)

  const { moviesList, setMoviesList, handleAddItemToCart, handleAddItemToWishList, search, setSearch } = context

  return { moviesList, setMoviesList, handleAddItemToCart, handleAddItemToWishList, search, setSearch }
}
