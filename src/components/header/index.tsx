import { BsSearch } from 'react-icons/bs'
import { HeartStraight, ShoppingCart } from 'phosphor-react'
import { useModalCart } from '../../context/ModalCartContext'
import { useModalWishlist } from '../../context/ModalWishlistContext'
import { FloatCartMenu } from '../floatCartMenu'
import { FloatWishlistMenu } from '../floatWishlistMenu'
import { useEffect } from 'react'
import { useMovies } from '../../context/MoviesContext'
import { api, api_searchedMovies } from '../../services/api'
import Link from 'next/link'

export function Header() {
  const { handleOpenModalCart } = useModalCart()
  const { handleOpenModalWishlist } = useModalWishlist()
  const { search, setSearch, setMoviesList } = useMovies()

  async function getSearchedMovies() {
    const searchMovies = await api_searchedMovies.get(
      `?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${search}&page=1`,
    )
    const responseMovies = await searchMovies.data.results
    setMoviesList(responseMovies)
  }

  async function getDefaultMovies() {
    const responseMovies = await api.get(
      `popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    )
    const moviesData = await responseMovies.data.results
    setMoviesList(moviesData)
  }

  useEffect(() => {
    if (!search) {
      getDefaultMovies()
      return
    } else {
      getSearchedMovies()
    }
  }, [search])

  return (
    <>
      <header className='bg-green-light-200 z-10 fixed w-full'>
        <div className='max-w-7xl w-full h-28 mx-auto px-4 flex flex-wrap sm:h-20 justify-between items-center'>
          <Link href='/'>
            <a>Movies</a>
          </Link>
          <div className='flex items-center w-96 px-2 bg-[#fff] rounded'>
            <input
              className='w-full h-10 px-2 border-none focus:outline-none'
              type='text'
              placeholder='Pesquisa'
              onChange={(event) => setSearch(event.currentTarget.value)}
            />
            <BsSearch size='18' />
          </div>
          <nav className='flex justify-between w-24'>
            <button onClick={handleOpenModalWishlist}>
              <HeartStraight size={32} color='white' />
            </button>
            <button onClick={handleOpenModalCart}>
              <ShoppingCart size={32} color='white' />
            </button>
          </nav>
        </div>
      </header>
      <FloatCartMenu />
      <FloatWishlistMenu />
    </>
  )
}
