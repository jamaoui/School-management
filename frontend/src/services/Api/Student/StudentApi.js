import {axiosClient} from "../../../api/axios.js";

const StudentApi = {
  login: async (email, password) => {
    return await axiosClient.post('/login', {email, password})
  },
  logout: async () => {
    return await axiosClient.post('/logout')
  },
  getUser: async () => {
    return await axiosClient.get('/admin')
  },

}
export default StudentApi
