import { HeartStraight } from 'phosphor-react'
import { useState } from 'react'
import { GoStar } from 'react-icons/go'
import { useMovies } from '../context/MoviesContext'
import { api, api_searchedMovies } from '../services/api'
import InfiniteScroll from 'react-infinite-scroll-component'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface MoviesListProps {
  id: number
  genre_ids: number[]
  title: string
  release_date: string
  poster_path: string
}

type MoviesListResponse = {
  moviesData: MoviesListProps[]
}

export function Movies({ moviesData }: MoviesListResponse) {
  const [currentPage, setCurrentPage] = useState(2)
  const { search, setSearch, moviesList, setMoviesList, handleAddItemToCart, handleAddItemToWishList } = useMovies()
  
  async function newMovies() {
    if(!search){
      const responseNewMovies = await api.get(`popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&page=${currentPage}`)
      const responseData = await responseNewMovies.data.results
      setMoviesList((oldState) => [...oldState, ...responseData])
      setCurrentPage( currentPage + 1)
      
    } else {
      setCurrentPage(2)
      const responseNewMovies = await api_searchedMovies.get(`?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${search}&page=${currentPage}`)
      const responseData = await responseNewMovies.data.results
      setMoviesList((oldState) => [...oldState, ...responseData])
      setCurrentPage( currentPage + 1)
    }
  }
  return (
    <section>
      <ul>
        <InfiniteScroll 
        dataLength={moviesData.length} 
        next={newMovies} 
        hasMore={true} loader={<p>loading...</p>} 
        className="max-w-7xl w-full py-30 px-4 mx-auto grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
        {moviesData.map((movies) => (
          <li
            className='mx-auto rounded-lg overflow-hidden cursor-pointer relative hover:brightness-90 transition duration-300'
            key={movies.id}
          >
            <div className='z-[2] absolute h-16 w-full bg-gradient-to-b from-[#000] to-transparent'>
              <button onClick={() => handleAddItemToWishList(movies.id)} className='absolute top-4 right-4'>
                <HeartStraight size={32} color='red'/>
              </button>
            </div>
              <LazyLoadImage src={process.env.NEXT_PUBLIC_API_IMAGE + movies.poster_path} alt={movies.title} effect='blur'/>
            <div className="flex justify-center items-center absolute h-14 w-full bottom-40 bg-gradient-to-t from-[#000] to-transparent">
              <span className="text-[#fff]">{movies.release_date}</span>
            </div>
            <div className='flex flex-col items-center pt-2 border-x  border-gray-light-200 gap-2 w-full'>
              <h3 className='font-bold text-center h-10'>{movies.title}</h3>
              <div className='flex items-center gap-2'>
                <span>
                  <GoStar size={21}/>
                </span>
                <p>Gênero</p>
              </div>
              <span className=" font-bold">R$ 79,99</span>
              <button onClick={() => handleAddItemToCart(movies.id)} className='w-full rounded-b-md h-10 text-[#fff] bg-purple-dark-600'>
                Adicionar
              </button>
            </div>
          </li>
        ))}
        </InfiniteScroll>
      </ul>
    </section>
  )
}
