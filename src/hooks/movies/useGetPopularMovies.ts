import { useInfiniteQuery } from "@tanstack/react-query"
import { getPopularMovies } from "../../apis/services/movies"

export const useGetPopularMovies = () => {
    const getPopularMoviesQuery = useInfiniteQuery({
        queryKey: ['popular-movies'],
        initialPageParam: 1,
        queryFn: ({ pageParam }) => getPopularMovies(pageParam),
        getNextPageParam: (last, allPages) => {
            return allPages.length + 1
        },
        select: (res) => {
            return res?.pages.flatMap(page => page.data.results)
        },

    })
    return getPopularMoviesQuery
}