import { GetServerSideProps } from "next";

export default function Home() {
  return (
    <h1>Nome do filme</h1>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  
  return {
    props: {
      
    }
  }
}