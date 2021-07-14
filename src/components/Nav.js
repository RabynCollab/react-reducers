import React, { useState } from 'react'


const Nav = () => {

  const [isClick, setClick] = useState(false);
  return (
    <div>
      <nav className="bg-gray-300">

        <div className="max-w-6xl mx-auto flex justify-between items-center px-3 ">

          <div className="flex p-3 ">
            <div className="logo">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
            </div>

            <div className="primer ml-2 text-xl">JsonSample</div>

          </div>


          <div className="hidden md:flex px-2">
            <h1>Example</h1>
            <h1 className="px-5">Contact</h1>
          </div>
          <div className="md:hidden flex">
            <button onClick={() => setClick(!isClick)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>

        <div className={isClick ? 'mob px-9' : 'hidden'} >
          <p className="text-purple-600 ">Reducers</p>
          <p className="text-purple-600 ">Context</p>
        </div>
      </nav>
    </div>
  )
}

export default Nav
