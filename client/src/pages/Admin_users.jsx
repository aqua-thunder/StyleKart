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
    <>
      <div className="min-h-screen bg-gray-50 py-6 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">

          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-gray-200 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
              All Users
            </h2>
            <span className="text-sm text-gray-500">
              Total: {users?.length || 0}
            </span>
          </div>

          {Array.isArray(users) && users.length > 0 ? (
            <>
              {/* ================= DESKTOP / TABLET TABLE ================= */}
              <div className="hidden md:block overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead className="bg-gray-100 text-gray-700">
                    <tr>
                      <th className="py-3 px-4 text-left text-sm font-medium">#</th>
                      <th className="py-3 px-4 text-left text-sm font-medium">
                        Username
                      </th>
                      <th className="py-3 px-4 text-left text-sm font-medium">
                        Email
                      </th>
                      <th className="py-3 px-4 text-left text-sm font-medium">
                        Phone
                      </th>
                      <th className="py-3 px-4 text-center text-sm font-medium">
                        Actions
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {users.map((item, index) => (
                      <tr
                        key={item._id}
                        className="border-b border-gray-200 hover:bg-gray-50 transition"
                      >
                        <td className="py-3 px-4 text-sm text-gray-700">
                          {index + 1}
                        </td>
                        <td className="py-3 px-4 text-sm font-medium text-gray-800">
                          {item.username}
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-700 break-all">
                          {item.email}
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-700">
                          {item.phone}
                        </td>
                        <td className="py-3 px-4 text-center space-x-2">
                          <Link
                            to={`/admin/users/${item._id}/edit`}
                            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm transition"
                          >
                            Update
                          </Link>
                          <button
                            onClick={() => deleteUser(item._id)}
                            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm transition"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* ================= MOBILE CARDS ================= */}
              <div className="md:hidden p-4 space-y-4">
                {users.map((item, index) => (
                  <div
                    key={item._id}
                    className="border rounded-xl p-4 shadow-sm bg-white"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-gray-700">
                        #{index + 1}
                      </span>
                      <span className="text-sm text-gray-500">
                        {item.phone}
                      </span>
                    </div>

                    <p className="text-base font-medium text-gray-800">
                      {item.username}
                    </p>
                    <p className="text-sm text-gray-600 break-all">
                      {item.email}
                    </p>

                    <div className="mt-4 flex gap-3">
                      <Link
                        to={`/admin/users/${item._id}/edit`}
                        className="flex-1 text-center bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg text-sm transition"
                      >
                        Update
                      </Link>
                      <button
                        onClick={() => deleteUser(item._id)}
                        className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg text-sm transition"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            /* Loader */
            <div className="flex items-center justify-center h-[60vh] gap-2">
              <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
              <span className="w-3 h-3 bg-purple-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
              <span className="w-3 h-3 bg-pink-500 rounded-full animate-bounce"></span>
            </div>
          )}
        </div>
      </div>

    </>
  )
}

export default Admin_users
