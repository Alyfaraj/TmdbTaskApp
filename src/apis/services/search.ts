import API from ".."
import { API_KEY } from "../../services/constans"

export const searchWithKeyword = async (keyword: string, page: number) => {
    return await API.get(`/search/movie?query=${keyword}&api_key=${API_KEY}&page=${page}`)

}