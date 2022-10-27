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
  loadingPage: boolean,
  setLoadingPage: React.Dispatch<React.SetStateAction<boolean>>
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  handleAddItemToCart: (id: number) => void
  handleAddItemToWishList: (id: number) => void
}

const defaultMovieContextValues: MovieContextValues = {
  moviesList: [],
  setMoviesList: () => [],
  search: '',
  setSearch: () => '',
  loadingPage: false,
  setLoadingPage: () => false,
  currentPage: 2,
  setCurrentPage: () => {},
  handleAddItemToCart: (id: number) => {},
  handleAddItemToWishList: (id: number) => {}
}

export const MoviesContext = createContext(defaultMovieContextValues)

export function MovieProvider({ children }: MovieProviderProps) {
  const [moviesList, setMoviesList] = useState<MoviesListResponse[]>([])
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(2)
  const [loadingPage, setLoadingPage] = useState(false);

  function handleAddItemToCart(id: number) {
    const tempMovies = [...moviesList]
    const selectedMovie = tempMovies.find((movie) => movie.id === id)

    if(selectedMovie){
      selectedMovie.inCart = true
    }
  }

  function handleAddItemToWishList(id: number) {
    const tempMovies = [...moviesList]
    const selectedMovie = tempMovies.find((movie) => movie.id === id)

    if(selectedMovie){
      selectedMovie.wishList = true
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
        handleAddItemToWishList
      }}
    >
      {children}
    </MoviesContext.Provider>
  )
}

export function useMovies() {
  const context = useContext(MoviesContext)

  const { moviesList, setMoviesList, handleAddItemToCart, handleAddItemToWishList, search, setSearch, loadingPage, setLoadingPage, currentPage, setCurrentPage } = context

  return { moviesList, setMoviesList, handleAddItemToCart, handleAddItemToWishList, search, setSearch, loadingPage, setLoadingPage, currentPage, setCurrentPage }
}
