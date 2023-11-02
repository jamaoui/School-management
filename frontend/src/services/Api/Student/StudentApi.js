import {axiosClient} from "../../../api/axios.js";
import {STUDENT_DASHBOARD_ROUTE} from "../../../router/index.jsx";

const StudentApi = {
  getCsrfToken: async () => {
    return await axiosClient.get('/sanctum/csrf-cookie', {
      baseURL: import.meta.env.VITE_BACKEND_URL
    })
  },
    login: async (email, password) => {
        return await axiosClient.post('/login', {email,password})
    },
    logout: async () => {
        return await axiosClient.post('/logout')
    },
  getUser: async () => {
    return await axiosClient.get('/user')
  },

}
export default StudentApi
