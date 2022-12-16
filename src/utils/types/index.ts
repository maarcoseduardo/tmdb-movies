import { ReactNode } from "react"

//Home 
export interface IMovieslist {
  id: number
  genre_ids: number
  title: string
  release_date: string
  poster_path: string
  quantity: number
  price: number 
  vote_average: number
  inCart?: boolean
  wishList?: boolean
  total?: number
}

export type MoviesListPropsTyped = {
  moviesData: IMovieslist[];
  moviesGenreData: IGenres[];
}

//Context useMovies
export interface MovieProviderProps {
  children: ReactNode
}

interface IDefaultMovieContextValues {
  moviesList: IMovieslist[]
  setMoviesList: React.Dispatch<React.SetStateAction<IMovieslist[]>>
  genres: IGenres[]
  setGenres: React.Dispatch<React.SetStateAction<IGenres[]>>
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
  loadingPage: boolean,
  setLoadingPage: React.Dispatch<React.SetStateAction<boolean>>
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  handleToggleItemToWishlist: (id: number) => void
}

export const defaultMovieContextValues: IDefaultMovieContextValues = {
  moviesList: [],
  setMoviesList: () => [],
  genres: [],
  setGenres: () => [],
  search: '',
  setSearch: () => '',
  loadingPage: false,
  setLoadingPage: () => false,
  currentPage: 2,
  setCurrentPage: () => {},
  handleToggleItemToWishlist: (id: number) => {},
}

// Context ModalCartMenuContext
export interface ModalProviderProps {
  children: ReactNode
}

interface IModalCartContextValues {
  openModalCart: boolean
  setOpenModalCart: React.Dispatch<React.SetStateAction<boolean>>
  handleOpenModalCart: React.Dispatch<React.SetStateAction<any>>
  handleCloseModalCart: React.Dispatch<React.SetStateAction<any | any>>
}

export const defaultCartValues: IModalCartContextValues = {
  openModalCart: false,
  setOpenModalCart: () => false,
  handleOpenModalCart: () => true,
  handleCloseModalCart: () => false,
}

//Context ModalWishlistContext
export interface ModalProviderProps {
  children: ReactNode
}

interface IWishlistContextDefaultValues {
  openModalWishlist: boolean
  setOpenModalWishlist: React.Dispatch<React.SetStateAction<boolean>>
  handleOpenModalWishlist: React.Dispatch<React.SetStateAction<any>>
  handleCloseModalWishlist: React.Dispatch<React.SetStateAction<any | any>>
}

export const defaultWishlistValues: IWishlistContextDefaultValues = {
  openModalWishlist: false,
  setOpenModalWishlist: () => false,
  handleOpenModalWishlist: () => true,
  handleCloseModalWishlist: () => false,
}

// Movies InCart

interface IDefaultMovieCartContextValues {
  moviesInCart: IMovieslist[];
  setMoviesInCart: React.Dispatch<React.SetStateAction<IMovieslist[]>>
  priceTotalOfMovies: number
  setPriceTotalOfMovies: React.Dispatch<React.SetStateAction<number>>
  handleAddItemToCart: (movie: IMovieslist) => void
  handleRemoveItemToCart: (movie: IMovieslist) => void
  handleIncrementQuantityOnMovies: (movie: IMovieslist) => void
  handleDecrementQuantityOnMovies: (movie: IMovieslist) => void
}

export const defaultMovieCartContextValues: IDefaultMovieCartContextValues = {
  moviesInCart: [{
    id:0,
    genre_ids: 0,
    title: '',
    release_date: '',
    poster_path: '',
    quantity: 1,
    price: 0,
    vote_average: 0.0,
    inCart: false,
    wishList: false,
    total: 0
  }],
  setMoviesInCart: () => [],
  priceTotalOfMovies: 0,
  setPriceTotalOfMovies: () => 0,
  handleAddItemToCart: (movie: IMovieslist) => {},
  handleRemoveItemToCart: (movie: IMovieslist) => {},
  handleIncrementQuantityOnMovies: (movie: IMovieslist) => {},
  handleDecrementQuantityOnMovies: (movie: IMovieslist) => {}
}

// Interface Genres

export interface IGenres {
  id: number,
  name: string,
}