/* eslint-disable @typescript-eslint/no-explicit-any */
import MainLayout from "../layout/MainLayout";
import CardMovie from "../components/CardMovie";
import CardSkeleton from "../components/CardSkeleton";
import { useState, useEffect, useRef } from "react";
import api from "../api/axios";
import { ErrorState, Movie } from "../common/types";
import useQueryParams from "../hooks/useQueryParams";
import ErrorPage from "../components/ErrorPage";


const SearchResultScreen = () => {
  const [searchResult, setSearchResult] = useState<Movie[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<ErrorState>({} as ErrorState);
  const [page, setPage] = useState(1)
  const { query } = useQueryParams()
  const observerTarget = useRef(null)

  useEffect(() => {
    const searchMovies = async () => {
      setIsLoading(true);
      try {
        const params = {
          query,
          page,
          include_adult: false,
          include_video: false,
          language: 'en-US',
        }
        const res = await api.get(`/search/movie`, { params })
        const { results } = res.data
        setSearchResult((prevItems) => [...prevItems, ...results])
      } catch (error: any) {
        setIsError(true)
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    searchMovies()
  }, [query, page])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setPage((page) => page + 1)
        }
      },
      { threshold: 1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget])

  return (
    <MainLayout title={query}>
      {
        query && (
          <div className="text-sm md:text-md mb-2 px-1 md:px-4">
            Search result for: {query}
          </div>
        )
      }
      <div className="flex flex-wrap">
        {(isLoading ? <CardSkeleton cardToRender={20} /> :
          isError ? (<ErrorPage error={error} />) :
            searchResult.map((movie, i) => (
              <CardMovie movie={movie} key={i} />
            ))
        )}
        <div ref={observerTarget} />
      </div>

    </MainLayout >
  )
}

export default SearchResultScreen