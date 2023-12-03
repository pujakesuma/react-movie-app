import { useMovieAPI } from "../hooks/useMovieAPI";
import MainLayout from "../layout/MainLayout";
import CardMovie from "../components/CardMovie";
import CardSkeleton from "../components/CardSkeleton";
import ErrorPage from "../components/ErrorPage";

const HomeScreen = () => {
  const [movies, observerTarget, isLoading, error, isError] = useMovieAPI()

  return (
    <MainLayout title="Home">
      <div className="flex flex-wrap">
        {(isLoading ? <CardSkeleton cardToRender={20} /> :
          isError ? (<ErrorPage error={error} />) :
            movies.map((movie, i) => (
              <CardMovie movie={movie} key={i} />
            ))
        )}
        <div ref={observerTarget} />
      </div>

    </MainLayout >
  )
}

export default HomeScreen