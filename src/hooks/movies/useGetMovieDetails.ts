import { useQuery } from "@tanstack/react-query"
import { getMovieDetails } from "../../apis/services/movies"

export const useGetMovieDetails = (id: number) => {
    const getHomeMovies = useQuery({
        queryKey: ['movie', id],
        queryFn: () => getMovieDetails(id),
        select: ({ data }) => data,
        enabled: Boolean(id)


    })
    return getHomeMovies
}