import Modal from 'react-modal'
import { useModalCart } from '../../context/ModalCartContext'
import { useMovies } from '../../context/MoviesContext'
import { FaTrash } from 'react-icons/fa';

export function FloatCartMenu() {
  const { openModalCart, handleCloseModalCart } = useModalCart()
  const { moviesList, handleRemoveItemToCart } = useMovies()
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
            {moviesList.map((movie) =>
              movie.inCart ? (
                <div key={movie.id} className='flex items-center justify-between h-15 '>
                  <div className="flex items-center gap-2 w-32">
                    <img className='w-10 h-10' src={process.env.NEXT_PUBLIC_API_IMAGE + movie.poster_path} alt={movie.title} />
                    <p className="text-xs">{movie.title}</p>
                  </div>
                  <span className="text-xs">1</span>
                  <span className="text-xs">R$ 79.00</span>
                  <div>
                    <button onClick={() => handleRemoveItemToCart(movie.id)}>
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ) : (
                ''
              ),
            )}
          </div>
          <button className='w-full rounded h-10 text-[#fff] bg-purple-dark-600'>
            Finalizar compra
          </button>
        </section>
      </Modal>
    </>
  )
}
