import API from ".."
import { API_KEY } from "../../services/constans"


export const getPopularMovies = async (page: number = 1) => {
    return await API.get(`/discover/movie?api_key=${API_KEY}&page=${page}`)
}



export const getMovieDetails = async (id: number) => {
    return await API.get(`/movie/${id}?api_key=${API_KEY}`)
}