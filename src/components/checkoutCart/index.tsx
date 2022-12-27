import { useMoviesInCart } from '../../context/MoviesInCart'
import { FaTrash } from 'react-icons/fa'

export function CheckoutCart() {
  const { moviesInCart, handleRemoveItemToCart, priceTotalOfMovies } =
    useMoviesInCart()

  return (
    <div className='w-full flex flex-col gap-4'>
      {moviesInCart.map((movie) => (
        <div key={movie.id} className='flex justify-between items-center'>
          <div className='max-w-[300px] w-full flex gap-3 items-center'>
            <img
              className='w-16 h-16'
              src={process.env.NEXT_PUBLIC_API_IMAGE + movie.poster_path}
              alt={movie.title}
            />
            <span>{movie.title}</span>
          </div>
          <div>R$ {movie.price}</div>
          <div>{movie.quantity}</div>
          <button onClick={() => handleRemoveItemToCart(movie)}>
            <FaTrash />
          </button>
        </div>
      ))}
      <div className='flex flex-col h-20 justify-between'>
        <div className='flex justify-between w-full'>
          <span className='text-lg'>Total:</span>
          <span className='text-2xl font-bold'>R$ {priceTotalOfMovies}</span>
        </div>
        <button className='w-full rounded h-10 text-[#fff] bg-purple-dark-600'>
          Finalizar compra
        </button>
      </div>
    </div>
  )
}
