import { useState } from 'react'
import { useMovies } from '../../context/MoviesContext'
import { api, api_searchedMovies } from '../../services/api'
import InfiniteScroll from 'react-infinite-scroll-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { Cards } from '../cards'

export function Movies() {
  const {
    search,
    moviesList,
    setMoviesList,
    currentPage,
    setCurrentPage,
  } = useMovies()
  
  const [hasMore, setHasMore] = useState(true)

  async function newMovies() {
    if (!search) {
      setCurrentPage(2)
      const responseNewMovies = await api.get(
        `popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&page=${currentPage}`,
      )
      const responseData = await responseNewMovies.data.results
      setMoviesList((oldState) => [...oldState, ...responseData])
      setCurrentPage(currentPage + 1)
      if (!responseData.length) {
        setHasMore(false)
      }
    } else {
      setCurrentPage(2)
      const responseNewMovies = await api_searchedMovies.get(
        `?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${search}&page=${currentPage}`,
      )
      const responseData = await responseNewMovies.data.results
      setMoviesList((oldState) => [...oldState, ...responseData])
      setCurrentPage(currentPage + 1)
      if (!responseData.length) {
        console.log(responseData.length)
        setHasMore(false)
      }
    }
  }
  return (
    <section>
      <ul>
        <InfiniteScroll
          dataLength={moviesList.length}
          next={newMovies}
          hasMore={hasMore}
          loader={<p>loading...</p>}
          className='max-w-7xl w-full py-32 px-4 mx-auto grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
        >
            <Cards />
        </InfiniteScroll>
      </ul>
    </section>
  )
}
