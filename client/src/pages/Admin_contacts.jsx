import React from 'react'
import { useAuth } from '../store/auth'
import { useState, useEffect } from 'react'

const Admin_contacts = () => {
  const [contacts, setContacts] = useState('')
  const { authorizationToken } = useAuth();
  const getAllContacts = async (req, res) => {
    try {
      const response = await fetch("http://localhost:7000/api/admin/contacts", {
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
      const response = await fetch(`http://localhost:7000/api/admin/contacts/delete/${id}`, {
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
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-800">All Contacts</h2>
          <span className="text-sm text-gray-500">
            Total: {contacts.length || 0}
          </span>
        </div>

        {Array.isArray(contacts) && contacts.length > 0 ? (
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
                    Messages
                  </th>
                  <th className="py-3 px-6 text-left text-sm font-medium">
                    Actions
                  </th>

                </tr>
              </thead>

              <tbody>
                {contacts.map((item, index) => (
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
                      {item.message}
                    </td>
                    <td className="py-3 px-6 text-center">
                      <button onClick={() => { deleteContact(item._id) }} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm transition cursor-pointer">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-10 text-gray-500">
            No contacts available
          </div>
        )}
      </div>
    </div>
  )
}

export default Admin_contacts
