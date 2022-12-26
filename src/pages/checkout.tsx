import { GetServerSideProps } from 'next'
import { CartCheckout } from '../components/cartCheckout'
import { FormCheckout } from '../components/formCheckout'
import { Header } from '../components/header'

export default function Checkout() {
  return (
    <>
      <Header />
      <section>
        <form className='lg:flex-row md:max-w-7xl flex flex-col w-full pt-36 px-4 mx-auto gap-12'>
          <FormCheckout />
          <CartCheckout />
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
