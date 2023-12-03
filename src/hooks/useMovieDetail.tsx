/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react"
import api from "../api/axios";
import { Cast, Crew, ErrorState, Genre, Movie } from "../common/types";

type MovieState = Movie & { actors: Cast[]; directors: Crew[] };

export const useMovieDetail = (id: string | undefined) => {
  const [movie, setMovie] = useState<Movie>({} as MovieState)
  const [genre, setGenre] = useState<Genre[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<ErrorState>({} as ErrorState);

  // GET Detail Movie
  useEffect(() => {
    const fetchDetailMovie = async () => {
      setIsLoading(true)
      try {
        const res = await api.get(`/movie/${id}`)
        const data = res.data
        setMovie(data)
        setGenre(data.genres)
      } catch (error: any) {
        setIsError(true)
        setError(error);
      } finally {
        setIsLoading(false)
      }
    }

    if (id) {
      fetchDetailMovie()
    }
  }, [id])

  return [movie, genre, isLoading, error, isError] as const
}
