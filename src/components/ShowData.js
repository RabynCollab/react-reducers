import React, { useContext } from 'react'
import { DataContext } from '../context/data-provider'
import Comments from './Comments';
import Posts from './Posts';
import Users from './Users';

const ShowData = () => {
  const ctx = useContext(DataContext);
  return (
    <div className="py-4 px-5 ">

      <div className="buttons flex justify-end px-5" >

        <button onClick={() => ctx.getPosts()}
          className="btn">Posts</button>


        <button onClick={() => ctx.getComments()}
          className="btn1">Comments</button>


        <button onClick={() => ctx.getUsers()}
          className="btn2">Users</button>
      </div>



      {ctx.state.posts.length !== 0 && ctx.state.dataType === 'Users' && <Users users={ctx.state.posts} />}
      {ctx.state.posts.length !== 0 && ctx.state.dataType === 'Comments' && <Comments comments={ctx.state.posts} />}
      {ctx.state.posts.length !== 0 && ctx.state.dataType === 'Posts' && <Posts posts={ctx.state.posts} />}

    </div>
  )
}

export default ShowData
