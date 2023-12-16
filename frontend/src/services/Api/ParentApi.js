import {axiosClient} from "../../api/axios.js";

const ParentApi = {
  create: async (payload) => {
    return await axiosClient.post('/admin/parents', payload)
  },
}
export default ParentApi
