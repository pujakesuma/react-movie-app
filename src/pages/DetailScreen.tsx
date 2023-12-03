import { useNavigate, useParams } from "react-router-dom"
import { useMovieDetail } from "../hooks/useMovieDetail"
import MainLayout from "../layout/MainLayout"
import { formatDuration, formatDate } from "../utils/formatter"
import Chips from "../components/Chips"
import noImage from "../assets/no-image.jpg"
import DetailSkeleton from "../components/DetailSkeleton"
import ErrorPage from "../components/ErrorPage"
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

const DetailScreen = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [movie, genre, isLoading, error, isError] = useMovieDetail(id)
  const releaseDate = new Date(formatDate(movie.release_date))
  const releaseYear = releaseDate.toLocaleDateString("default", {
    year: 'numeric'
  })

  const duration = formatDuration(movie.runtime)

  return (
    <MainLayout title="Detail">
      {isLoading ? (<DetailSkeleton />) :
        isError ? (<ErrorPage error={error} />) :
          (
            <div className="relative h-[55vh] md:h-[78vh]">
              <button className="absolute top-4 left-4 focus:outline-none" onClick={() => navigate(-1)}>
                <ArrowLeftIcon className="h-6 w-6 text-white hover:text-gray-200" />
              </button>
              {movie.backdrop_path === null ? <img src={noImage} className="h-full w-full" />
                : <img src={`${import.meta.env.VITE_API_IMG_URL}/original/${movie.backdrop_path}`} className="h-full w-full object-cover object-center" />}
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent z-20" />
              <div className="flex absolute -bottom-20 w-full justify-center z-40">
                <img src={`${import.meta.env.VITE_API_IMG_URL}/w500/${movie.poster_path}`} className="w-20 h-[150px] md:w-40 md:h-[200px]" />
                <div className="w-3/4 md:w-1/2 flex flex-col px-4 md:px-6">
                  <h1 className="text-white z-40 mb-2 md:mb-4 text-xl md:text-3xl font-bold text-left">{movie.title}</h1>
                  <div className="flex items-center gap-2 md:gap-4 w-full mb-2 md:mb-4 text-xs md:text-lg">
                    <div className="flex items-center">
                      <span className="text-slate-200">{releaseYear}</span>
                    </div>
                    <div className="h-4 md:h-6 border-l border-white"></div>
                    <div className="flex items-center">
                      <span className="text-slate-200">{movie.vote_average}</span>
                    </div>
                    <div className="h-4 md:h-6 border-l border-white"></div>
                    <div className="flex items-center">
                      <span className="text-slate-200">{duration}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center w-full mb-2 md:mb-4">
                    {
                      genre.map((v, i) => (
                        <Chips text={v.name} key={i} />
                      ))
                    }
                  </div>
                  <p className="text-xs md:text-lg">
                    {movie.overview}
                  </p>
                </div>
              </div>
            </div>
          )
      }

    </MainLayout>
  )
}

export default DetailScreen