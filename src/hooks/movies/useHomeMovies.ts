import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { getPopularMovies } from "../../apis/services/movies"

export const useHomeMovies = () => {
    const getHomeMovies = useQuery({
        queryKey: ['home-movies'],
        queryFn: () => getPopularMovies(1),
        select: ({ data }) => data?.results


    })
    return getHomeMovies
}