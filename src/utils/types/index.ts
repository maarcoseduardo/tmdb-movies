import { ReactNode } from "react"

//Home 
export interface IMovieslist {
  id: number
  genre_ids: number[]
  title: string
  release_date: string
  poster_path: string
  quantity: number
  price?: number
  inCart?: boolean
  wishList?: boolean
}

export type MoviesListPropsTyped = {
  moviesData: IMovieslist[]
}

//Context useMovies
export interface MovieProviderProps {
  children: ReactNode
}

interface IDefaultMovieContextValues {
  moviesList: IMovieslist[]
  setMoviesList: React.Dispatch<React.SetStateAction<IMovieslist[]>>
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

//InCart

interface IDefaultMovieCartContextValues {
  moviesInCart: IMovieslist[];
  setMoviesInCart: React.Dispatch<React.SetStateAction<IMovieslist[]>>
  handleAddItemToCart: (movie: IMovieslist) => void
  handleRemoveItemToCart: (movie: IMovieslist) => void
  handleIncrementQuantityOnMovies: (movie: IMovieslist) => void
  handleDecrementQuantityOnMovies: (movie: IMovieslist) => void
}

export const defaultMovieCartContextValues: IDefaultMovieCartContextValues = {
  moviesInCart: [{
    id:0,
    genre_ids: [0,0],
    title: '',
    release_date: '',
    poster_path: '',
    quantity: 1,
    price: 0,
    inCart: false,
    wishList: false
  }],
  setMoviesInCart: () => [],
  handleAddItemToCart: (movie: IMovieslist) => {},
  handleRemoveItemToCart: (movie: IMovieslist) => {},
  handleIncrementQuantityOnMovies: (movie: IMovieslist) => {},
  handleDecrementQuantityOnMovies: (movie: IMovieslist) => {}
}