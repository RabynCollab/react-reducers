import React from 'react'

const Users = ({ users }) => {
  return (
    <div className="mt-5">
      {users.map(user => (
        <div key={user.id} className="card bg-white rounded p-3 mb-2 shadow-md">
          <h1 className="font-semibold text-lg">{user.name}</h1>
          <p className="text-gray-600">{user.username}</p>
          <p className="text-gray-600">{user.email}</p>
        </div>

      ))}
    </div>
  )
}

export default Users
