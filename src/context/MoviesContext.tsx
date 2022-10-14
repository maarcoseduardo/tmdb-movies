import React, { createContext, useState, useContext, ReactNode } from "react";

interface MovieProviderProps {
  children: ReactNode;
}

interface MoviesListResponse {
  id: number;
  genre_ids: number[];
  title: string;
  release_date: string;
  poster_path: string;
}

interface MovieContextValues {
  moviesList: MoviesListResponse[];
  setMoviesList: React.Dispatch<React.SetStateAction<MoviesListResponse[]>>;
}

const defaultMovieContextValues: MovieContextValues = {
  moviesList: [],
  setMoviesList: () => [],
};

export const MoviesContext = createContext(defaultMovieContextValues);

export function MovieProvider({ children }: MovieProviderProps) {
  const [moviesList, setMoviesList] = useState<MoviesListResponse[]>([]);

  return (
    <MoviesContext.Provider
      value={{
        moviesList,
        setMoviesList,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}

export function useMovies() {
  const context = useContext(MoviesContext);

  const { moviesList, setMoviesList } = context;

  return { moviesList, setMoviesList };
}
