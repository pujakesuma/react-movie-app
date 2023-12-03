import { Link } from "react-router-dom"
import { Movie } from "../common/types"
import { formatDate } from "../utils/formatter"

interface Props {
  movie: Movie
}
const Card = ({ movie }: Props) => {
  const releaseDate = formatDate(movie.release_date)

  return (
    <div className="my-1 px-1 lg:my-4 lg:px-4 w-1/3 md:w-1/5">
      <div
        className="block rounded-lg">
        <Link to={`/movie/${movie.id}`}>
          <img
            className="rounded-t-lg lg:h-72 md:h-64 w-full object-cover object-center"
            src={`${import.meta.env.VITE_API_IMG_URL}/w500${movie.poster_path}`}
            alt={movie.title}
            loading="lazy" />
        </Link>
        <div className="py-4">
          <h5
            className="mb-2 text-sm md:text-md font-semibold leading-tight text-neutral-800 dark:text-neutral-50 line-clamp-1">
            {movie.title}
          </h5>
          <p className="text-xs md:text-sm text-neutral-600 dark:text-slate-400">
            {releaseDate}
          </p>
        </div>
      </div>
    </div>

  )
}

export default Card