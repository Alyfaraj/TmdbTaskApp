import Axios from 'axios'

const API = Axios.create({ baseURL: "https://api.themoviedb.org/3" })



export default API