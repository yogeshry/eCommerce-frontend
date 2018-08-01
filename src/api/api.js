import axios from 'axios'
// import auth from '../store/modules/auth'

export default() => {
  return axios.create({
    baseURL: `http://localhost:8080/api`,
    headers: {
      'Authorization': localStorage.getItem('jwtEcommerceToken')
    },
    withCredentials: false
  })
}
