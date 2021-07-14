import React from 'react'
import Nav from './components/Nav'
import ShowData from './components/ShowData'
import DataContextProvider from './context/data-provider'



const App = () => {

  return (
    <DataContextProvider>
      <Nav />
      <ShowData />
    </DataContextProvider>
  )
}

export default App
