import React from 'react'

const Comments = ({ comments }) => {
  return (
    <div className="mt-5">
      {comments.map(comment => (
        <div key={comment.id} className="card bg-white rounded p-3 mb-2 shadow-md">
          <h1 className="font-semibold text-lg">{comment.email}</h1>
          <p className="text-gray-600">{comment.body}</p>
        </div>

      ))}
    </div>
  )
}

export default Comments
