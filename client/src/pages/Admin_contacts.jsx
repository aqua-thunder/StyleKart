import React from 'react'
import { useAuth } from '../store/auth'
import { useState, useEffect } from 'react'

const Admin_contacts = () => {
  const API_URL = import.meta.env.VITE_API_URL;

  const [contacts, setContacts] = useState('')
  const { authorizationToken } = useAuth();
  const getAllContacts = async (req, res) => {
    try {
      const response = await fetch(`${API_URL}/api/admin/contacts`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      })
      const data = await response.json();
      setContacts(data)
      console.log(" Contact data : ", data)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteContact = async (id) => {
    try {
      const response = await fetch(`${API_URL}/api/admin/contacts/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        }
      })
      const data = await response.json()
      console.log(`contacts after delete ${data}`)
      if (response.ok) {
        getAllContacts();
      }
    } catch (error) {
      console.log(error)
    }

  }
  useEffect(() => {
    getAllContacts();
  }, [])


  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">

        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-gray-200 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
            All Contacts
          </h2>
          <span className="text-sm text-gray-500">
            Total: {contacts?.length || 0}
          </span>
        </div>

        {Array.isArray(contacts) && contacts.length > 0 ? (
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
                      Message
                    </th>
                    <th className="py-3 px-4 text-center text-sm font-medium">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {contacts.map((item, index) => (
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
                      <td className="py-3 px-4 text-sm text-gray-700 max-w-xs truncate">
                        {item.message}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <button
                          onClick={() => deleteContact(item._id)}
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
              {contacts.map((item, index) => (
                <div
                  key={item._id}
                  className="border rounded-xl p-4 shadow-sm bg-white"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-gray-700">
                      #{index + 1}
                    </span>
                    <button
                      onClick={() => deleteContact(item._id)}
                      className="text-xs bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full transition cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>

                  <p className="text-base font-medium text-gray-800">
                    {item.username}
                  </p>

                  <p className="text-sm text-gray-600 break-all mt-1">
                    {item.email}
                  </p>

                  <p className="text-sm text-gray-700 mt-3 leading-relaxed">
                    {item.message}
                  </p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-[60vh] gap-2">
            <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
            <span className="w-3 h-3 bg-purple-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
            <span className="w-3 h-3 bg-pink-500 rounded-full animate-bounce"></span>
          </div>
        )}
      </div>
    </div>

  )
}

export default Admin_contacts
