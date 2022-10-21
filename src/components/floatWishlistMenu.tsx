import Modal from 'react-modal'
import { useModalWishlist } from '../context/ModalWishlistContext'
import { useMovies } from '../context/MoviesContext'
import { FaTrash } from 'react-icons/fa';
import { ShoppingCart } from 'phosphor-react' 

export function FloatWishlistMenu() {
  const { openModalWishlist, handleCloseModalWishlist } = useModalWishlist()
  const { moviesList } = useMovies()
  return (
    <>
      <Modal
        ariaHideApp={false}
        isOpen={openModalWishlist}
        onRequestClose={handleCloseModalWishlist}
        overlayClassName='react-modal-overlay '
        className='react-modal-content animate-pop-up-menu'
      >
        <section className='flex flex-col gap-3 justify-between h-screen overflow-y-scroll px-4 py-4'>
          <div className='flex flex-col gap-4'>
            <div className='flex justify-between'>
              <button onClick={handleCloseModalWishlist}>X</button>
              <h2 className='font-bold'>Meus favoritos</h2>
            </div>
            {moviesList.map((movie) =>
              movie.wishList ? (
                <div key={movie.id} className='flex items-center justify-between h-15 '>
                  <div className="flex items-center gap-2 w-32">
                    <img className='w-10 h-10' src={process.env.NEXT_PUBLIC_API_IMAGE + movie.poster_path} alt={movie.title} />
                    <p className="text-xs">{movie.title}</p>
                  </div>
                  <span className="text-xs">R$ 79.00</span>
                  <div className="flex gap-2 w-10">
                    <button>
                      <ShoppingCart size={20} />
                    </button>
                    <button>
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ) : (
                ''
              ),
            )}
          </div>
        </section>
      </Modal>
    </>
  )
}
