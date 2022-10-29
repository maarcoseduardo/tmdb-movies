import { HeartStraight } from 'phosphor-react'
import { GoStar } from 'react-icons/go'
import { LazyLoadComponent, LazyLoadImage } from 'react-lazy-load-image-component'
import { useMovies } from '../../context/MoviesContext'
export function Cards() {
  const { moviesList, handleAddItemToCart, handleAddItemToWishList } = useMovies()

  return (
    <>
      {moviesList.map((movies) => (
        <LazyLoadComponent key={movies.id}>
          <li className='mx-auto rounded-lg overflow-hidden cursor-pointer relative animate-scroll-down hover:brightness-90 transition duration-300'>
            <div className='z-[2] absolute h-16 w-full bg-gradient-to-b from-[#000] to-transparent'>
              <button
                onClick={() => handleAddItemToWishList(movies.id)}
                className='absolute top-4 right-4'
              >
                <HeartStraight size={32} color='red' />
              </button>
            </div>
            <LazyLoadImage
              src={process.env.NEXT_PUBLIC_API_IMAGE + movies.poster_path}
              alt={movies.title}
              effect='blur'
              placeholderSrc={
                process.env.NEXT_PUBLIC_API_IMAGE + movies.poster_path
              }
            />
            <div className='flex justify-center items-center absolute h-14 w-full bottom-40 bg-gradient-to-t from-[#000] to-transparent'>
              <span className='text-[#fff]'>{movies.release_date}</span>
            </div>
            <div className='flex flex-col items-center pt-2 border-x border-gray-light-200 gap-2 w-full'>
              <h3 className='font-bold text-center h-10'>{movies.title}</h3>
              <div className='flex items-center gap-2'>
                <span>
                  <GoStar size={21} />
                </span>
                <p>Gênero</p>
              </div>
              <span className=' font-bold'>R$ 79,99</span>
              <button
                onClick={() => handleAddItemToCart(movies.id)}
                className='w-full rounded-b-md h-10 text-[#fff] bg-purple-dark-600'
              >
                Adicionar
              </button>
            </div>
          </li>
        </LazyLoadComponent>
      ))}
    </>
  )
}
