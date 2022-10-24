import React, { createContext, useState, useContext, ReactNode } from 'react'

interface MovieCartProviderProps {
  children: ReactNode
}

interface MoviesCartListResponse {
  id: number
  title: string
  poster_path: string
  price: number
  quantity: number
  inCart: boolean
}

interface MovieContextValues {
  moviesList: MoviesCartListResponse[]
  setMoviesList: React.Dispatch<React.SetStateAction<MoviesCartListResponse[]>>
}

const defaultMovieCartContextValues: MovieContextValues = {
  moviesList: [],
  setMoviesList: () => [],
}

export const MoviesCartContext = createContext(defaultMovieCartContextValues)

export function MovieProvider({ children }: MovieCartProviderProps) {
  const [moviesList, setMoviesList] = useState<MoviesCartListResponse[]>([])

  return (
    <MoviesCartContext.Provider
      value={{
        moviesList,
        setMoviesList,
      }}
    >
      {children}
    </MoviesCartContext.Provider>
  )
}

export function useMoviesInCart() {
  const context = useContext(MoviesCartContext)

  const { moviesList, setMoviesList } = context

  return { moviesList, setMoviesList }
}
