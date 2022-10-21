import { HeartStraight } from 'phosphor-react'
import { useEffect, useRef, useState } from 'react'
import { AiTwotoneStar } from 'react-icons/ai'
import { useMovies } from '../context/MoviesContext'
import { api } from '../services/api'

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
  const { moviesList, setMoviesList, handleAddItemToCart, handleAddItemToWishList } = useMovies()

  // async function newMovies() {
  //   const responseNewMovies = await api.get(
  //     `popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&page=${currentPage}`,
  //   )
  //   const responseData = await responseNewMovies.data.results

  //   setMoviesList((oldState) => [...oldState, ...responseData])
  // }
  // useEffect(() => {
  //   newMovies()
  // }, [currentPage])

  useEffect(() => {
    const responseNewMovies = api
      .get(
        `popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&page=${currentPage}`,
      )
      .then((responseData) => console.log(responseData.data))
  }, [currentPage])

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setCurrentPage((currentPageState) => currentPageState + 1)
      }
    })

    intersectionObserver.observe(document.querySelector('#sentinela'))

    return () => intersectionObserver.disconnect()
  }, [])

  return (
    <section>
      <p>Pagina Atual</p>
      {currentPage}
      <ul className='max-w-7xl w-full py-16 px-4 mx-auto grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {moviesData.map((movies) => (
          <li
            className='mx-auto rounded-lg overflow-hidden cursor-pointer'
            key={movies.id}
          >
            <div className='shadow-sm relative shadow-yellow-500'>
              <button onClick={() => handleAddItemToWishList(movies.id)} className='absolute top-4 right-4'>
                <HeartStraight size={32} color='red'/>
              </button>
            </div>
            <img src={process.env.NEXT_PUBLIC_API_IMAGE + movies.poster_path} />
            <div className='flex flex-col items-center pt-2 border-x  border-gray-light-200 gap-2 w-full'>
              <h3 className='font-bold text-center h-10'>{movies.title}</h3>
              <div className='flex items-center gap-2'>
                <AiTwotoneStar />
                <span>7</span>
                <p>Gênero</p>
              </div>
              <div>R$ 79,99</div>
              <button onClick={() => handleAddItemToCart(movies.id)} className='w-full rounded-b-md h-10 text-[#fff] bg-purple-dark-600'>
                Adicionar
              </button>
            </div>
          </li>
        ))}
        <li id='sentinela'></li>
      </ul>
    </section>
  )
}
