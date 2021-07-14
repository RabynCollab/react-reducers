import React from 'react'

const Posts = ({ posts }) => {
  return (
    <div className="mt-5">
      {posts.map(post => (
        <div key={post.id} className="card bg-white rounded p-3 mb-2 shadow-md">
          <h1 className="font-semibold text-lg">{post.title}</h1>
          <p className="text-gray-600">{post.body}</p>
        </div>

      ))}
    </div>
  )
}

export default Posts
