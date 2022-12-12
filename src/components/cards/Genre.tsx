import { useMovies } from "../../context/MoviesContext"

interface IGenreProps {
  genre_id: number
}

export const Genre = ({ genre_id }: IGenreProps) => {
  const { genres } = useMovies();
  
  const genre = genres.find(({ id }) => id === genre_id)

  return <span>{genre?.name}</span>
}