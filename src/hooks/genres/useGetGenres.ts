import { useQuery } from "@tanstack/react-query"
import { getGenres } from "../../apis/services/genres"

export const useGetGenres = () => {
    const getGenresData = useQuery({
        queryKey: ['genres'],
        queryFn: () => getGenres(1),
        select: ({ data }) => data?.genres,
    })
    return getGenresData
}