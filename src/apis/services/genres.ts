import API from ".."
import { API_KEY } from "../../services/constans"


export const getGenres = async (page: number = 1) => {
    return await API.get(`/genre/movie/list?api_key=${API_KEY}&page=${page}`)
}