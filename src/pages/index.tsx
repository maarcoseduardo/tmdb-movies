import { GetServerSideProps } from 'next'
import { useEffect } from 'react'
import { Header } from '../components/header'
import { useMovies } from '../context/MoviesContext'
import { api, api_images } from '../services/api'
import { Movies } from '../components/movies'

interface MoviesListProps {
  id: number
  genre_ids: number[]
  title: string
  release_date: string
  poster_path: string
}

type MoviesListResponse = {
  moviesData: MoviesListProps[]
}

export default function Home({ moviesData }: MoviesListResponse) {
  const { moviesList, setMoviesList } = useMovies()

  useEffect(() => {
    setMoviesList(moviesData)
  }, [])

  return (
    <>
      <Header />
      <Movies moviesData={moviesList} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const responseMovies = await api.get(`popular?api_key=${process.env.API_KEY}`)
  const moviesData = responseMovies.data.results

  return {
    props: {
      moviesData,
    },
  }
}
