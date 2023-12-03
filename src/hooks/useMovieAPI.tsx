/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, useRef } from "react"
import { ErrorState, Movie } from "../common/types";
import api from "../api/axios";


export const useMovieAPI = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<ErrorState>({} as ErrorState);
  const [page, setPage] = useState(1)
  const observerTarget = useRef(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const params = {
          page,
          include_adult: false,
          include_video: false,
          language: 'en-US',
        }
        const res = await api.get(`/discover/movie`, { params })
        const { results } = res.data
        setMovies((prevItems) => [...prevItems, ...results])
      } catch (error: any) {
        setIsError(true)
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies()
  }, [page])

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

  return [movies, observerTarget, isLoading, error, isError] as const
}
