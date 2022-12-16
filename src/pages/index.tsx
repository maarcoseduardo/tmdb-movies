import { GetServerSideProps } from 'next'
import { useEffect } from 'react'
import { Header } from '../components/header'
import { Movies } from '../components/movies'
import { useMovies } from '../context/MoviesContext'
import { api, api_genre } from '../services/api'
import { MoviesListPropsTyped } from  "../utils/types"


export default function Home({ moviesData, moviesGenreData }: MoviesListPropsTyped) {
  const { setMoviesList, genres, setGenres } = useMovies()

  useEffect(() => {
    setMoviesList(moviesData)
    setGenres(moviesGenreData)
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
  const moviesData = await responseMovies.data.results

  const responseGenre = await api_genre.get(`list?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
  const moviesGenreData = await responseGenre.data.genres

  return {
    props: {
      moviesData,
      moviesGenreData
    },
  }
}
