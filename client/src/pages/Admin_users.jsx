import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth'
import { Link } from 'react-router-dom'
const Admin_users = () => {
  const API_URL = import.meta.env.VITE_API_URL;

  const [users, setUsers] = useState('')
  const { authorizationToken } = useAuth();
  const getAllUserData = async (req, res) => {
    try {
      const response = await fetch(`${API_URL}/api/admin/users`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken
        },
      })
      const data = await response.json()
      setUsers(data)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteUser = async (id) => {
    try {
      const response = await fetch(`${API_URL}/api/admin/users/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken
        }
      })
      const data = await response.json();
      console.log(`user after delete ${data}`)
      if (response.ok) {
        getAllUserData();
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getAllUserData();
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-800">All Users</h2>
          <span className="text-sm text-gray-500">
            Total: {users.length || 0}
          </span>
        </div>

        {Array.isArray(users) && users.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="py-3 px-6 text-left text-sm font-medium">
                    #
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-medium">
                    Username
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-medium">
                    Email
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-medium">
                    Phone
                  </th>
                  <th className="py-3 px-6 text-center text-sm font-medium">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {users.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-gray-50 transition"
                  >
                    <td className="py-3 px-6 text-gray-700 text-sm">
                      {index + 1}
                    </td>
                    <td className="py-3 px-6 text-gray-800 text-sm font-medium">
                      {item.username}
                    </td>
                    <td className="py-3 px-6 text-gray-700 text-sm">
                      {item.email}
                    </td>
                    <td className="py-3 px-6 text-gray-700 text-sm">
                      {item.phone}
                    </td>
                    <td className="py-3 px-6 text-center">
                      <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm mr-2 transition cursor-pointer">
                        <Link to={`/admin/users/${item._id}/edit`}>Update</Link>
                      </button>
                      <button onClick={() => { deleteUser(item._id) }} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm transition cursor-pointer">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
           <div className="flex items-center justify-center gap-2 h-screen">
              <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
              <span className="w-3 h-3 bg-purple-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
              <span className="w-3 h-3 bg-pink-500 rounded-full animate-bounce"></span>
            </div>
        )}
      </div>
    </div>
  )
}

export default Admin_users
