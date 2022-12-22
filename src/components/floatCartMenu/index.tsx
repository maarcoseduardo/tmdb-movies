import Modal from 'react-modal'
import { useModalCart } from '../../context/ModalCartContext'
import { FaTrash } from 'react-icons/fa'
import { useMoviesInCart } from '../../context/MoviesInCart'

export function FloatCartMenu() {
  const { openModalCart, handleCloseModalCart } = useModalCart()
  const { moviesInCart, handleRemoveItemToCart, priceTotalOfMovies } =
    useMoviesInCart()

  return (
    <>
      <Modal
        ariaHideApp={false}
        isOpen={openModalCart}
        onRequestClose={handleCloseModalCart}
        overlayClassName='react-modal-overlay '
        className='react-modal-content animate-pop-up-menu'
      >
        <section className='flex flex-col gap-3 justify-between h-screen overflow-y-scroll px-4 py-4'>
          <div className='flex flex-col gap-4'>
            <div className='flex justify-between'>
              <button onClick={handleCloseModalCart}>X</button>
              <h2 className='font-bold'>Meu Carrinho</h2>
            </div>
            {moviesInCart.map((movie) => (
              <div
                key={movie.id}
                className='flex items-center justify-between h-15 '
              >
                <div className='flex items-center gap-2 w-32'>
                  <img
                    className='w-10 h-10'
                    src={process.env.NEXT_PUBLIC_API_IMAGE + movie.poster_path}
                    alt={movie.title}
                  />
                  <p className='text-xs'>{movie.title}</p>
                </div>
                <span className='text-xs'>{movie.quantity}</span>
                <span className='text-xs'>R$ {movie.price}</span>
                <div>
                  <button onClick={() => handleRemoveItemToCart(movie)}>
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col h-20 justify-between">
            <div className="flex justify-between w-full">
              <span className="text-lg">Total:</span>
              <span className="text-2xl font-bold">R$ {priceTotalOfMovies}</span>
            </div>
          <button className='w-full rounded h-10 text-[#fff] bg-purple-dark-600'>
            Finalizar compra
          </button>
          </div>
        </section>
      </Modal>
    </>
  )
}
