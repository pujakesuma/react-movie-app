import MainLayout from "../layout/MainLayout";
import CardMovie from "../components/CardMovie";
import CardSkeleton from "../components/CardSkeleton";
import { useFilterMovies } from "../hooks/useFilterMovies";
import ErrorPage from "../components/ErrorPage";

const UpcomingScreen = () => {
  const [movies, observerTarget, isLoading, error, isError] = useFilterMovies('upcoming')

  return (
    <MainLayout title="Upcoming">
      <div className="flex flex-wrap mx-2">
        {(isLoading ? <CardSkeleton cardToRender={20} /> :
          isError ? (<ErrorPage error={error} />) :
            movies.map((movie, i) => (
              <CardMovie movie={movie} key={i} />
            ))
        )}
      </div>
      <div ref={observerTarget} />
    </MainLayout >
  )
}

export default UpcomingScreen