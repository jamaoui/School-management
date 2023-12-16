import {useUserContext} from "../../context/StudentContext.jsx";

export default function AdminDashboard() {
  const {user} = useUserContext()
  return <>
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            ID
          </th>
          <th scope="col" className="px-6 py-3">
            Name
          </th>
          <th scope="col" className="px-6 py-3">
            Email
          </th>
          <th scope="col" className="px-6 py-3">
            Date
          </th>
        </tr>
        </thead>
        <tbody>
        <tr className="bg-white dark:bg-gray-800">
          <th scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {user.id}
          </th>
          <td className="px-6 py-4">
            {user.firstname} {user.lastname}
          </td>
          <td className="px-6 py-4">
            {user.email}
          </td>
          <td className="px-6 py-4">
            {user.created_at}
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </>
}
