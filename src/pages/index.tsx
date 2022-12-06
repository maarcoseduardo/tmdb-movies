import { GetServerSideProps } from 'next'
import { useEffect } from 'react'
import { Header } from '../components/header'
import { Movies } from '../components/movies'
import { useMovies } from '../context/MoviesContext'
import { api } from '../services/api'
import { MoviesListPropsTyped } from  "../utils/types"


export default function Home({ moviesData }: MoviesListPropsTyped) {
  const { setMoviesList } = useMovies()

  useEffect(() => {
    setMoviesList(moviesData)
  }, [])

  return (
    <>
      <Header />
      <Movies />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const responseMovies = await api.get(
    `popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
  )
  const moviesData = responseMovies.data.results

  return {
    props: {
      moviesData,
    },
  }
}
