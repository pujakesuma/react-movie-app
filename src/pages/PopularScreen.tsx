import MainLayout from "../layout/MainLayout";
import CardMovie from "../components/CardMovie";
import CardSkeleton from "../components/CardSkeleton";
import { useFilterMovies } from "../hooks/useFilterMovies";
import ErrorPage from "../components/ErrorPage";

const PopularScreen = () => {
  const [movies, observerTarget, isLoading, error, isError] = useFilterMovies('popular')

  return (
    <MainLayout title="Popular">
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

export default PopularScreen