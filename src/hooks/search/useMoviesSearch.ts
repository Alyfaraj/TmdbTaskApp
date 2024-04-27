import { useInfiniteQuery } from "@tanstack/react-query"
import { searchWithKeyword } from "../../apis/services/search"

export const useMoviesSearch = (keyword: string) => {
    const searchMovies = useInfiniteQuery({
        queryKey: ['search-movies', keyword],
        initialPageParam: 1,
        queryFn: ({ pageParam }) => searchWithKeyword(keyword, pageParam),
        getNextPageParam: (last, allPages) => {
            return allPages.length + 1
        },
        select: (res) => {
            return res?.pages.flatMap(page => page.data.results)
        },
        enabled: Boolean(keyword)

    })
    return searchMovies
}