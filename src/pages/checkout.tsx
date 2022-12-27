import { GetServerSideProps } from 'next'
import { CheckoutCart } from '../components/checkoutCart'
import { CheckoutForm } from '../components/checkoutForm'
import { Header } from '../components/header'

export default function Checkout() {
  return (
    <>
      <Header />
      <section>
        <form className='lg:flex-row md:max-w-7xl flex flex-col w-full pt-32 pb-4 px-4 mx-auto gap-12'>
          <CheckoutForm />
          <CheckoutCart />
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
