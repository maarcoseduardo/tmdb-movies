import { GetServerSideProps } from 'next'
import { Header } from '../components/header'
import { useMoviesInCart } from '../context/MoviesInCart'

export default function Checkout() {
  const { moviesInCart } = useMoviesInCart()
  return (
    <>
      <Header />
      <section>
        <form className="max-w-7xl pt-36 px-4 mx-auto flex gap-12">
          <div className="max-w-[600px] w-full h-72 flex flex-col gap-4">
            <input className="w-full border h-10 px-4" type="text" placeholder='Nome completo' />
            <div className="flex justify-between">
              <input className="max-w-[290px] w-full border h-10 px-4" type="text" placeholder='CPF' />
              <input className="max-w-[290px] w-full border h-10 px-4" type="text" placeholder='Celular' />
            </div>
            <input className="w-full border h-10 px-4" type="text" placeholder='E-mail' />
            <div className="flex justify-between">
              <input className="w-[220px] border h-10 px-4" type="text" placeholder='CEP' />
              <input className="w-[360px] border h-10 px-4" type="text" placeholder='Endereço' />
            </div>
            <div className="flex justify-between">
              <input className="max-w-[290px] w-full border h-10 px-4" type="text" placeholder='Cidade' />
              <input className="max-w-[290px] w-full border h-10 px-4" type="text" placeholder='Estado' />
            </div>
          </div>
          <div className="max-w-[600px] w-full">
            {moviesInCart.map((movie) => (
              <div key={movie.id} className="flex justify-between items-center">
                <img className="w-14 h-14" src={process.env.NEXT_PUBLIC_API_IMAGE + movie.poster_path} alt={movie.title} />
                <strong>{movie.title}</strong>
                <div>{movie.quantity}</div>
                <div>Trash</div>
              </div>
            ))}
          </div>
        </form>
      </section>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  }
}
