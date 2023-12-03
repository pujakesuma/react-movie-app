import MainLayout from "../layout/MainLayout";
import CardMovie from "../components/CardMovie";
import CardSkeleton from "../components/CardSkeleton";
import { useFilterMovies } from "../hooks/useFilterMovies";
import ErrorPage from "../components/ErrorPage";

const NowPlayingScreen = () => {
  const [movies, observerTarget, isLoading, error, isError] = useFilterMovies('now_playing')

  return (
    <MainLayout title="Now Playing">
      <h1 className="px-3 md:px-6 text-lg md:text-2xl font-bold mb-2">Now Playing</h1>
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

export default NowPlayingScreen