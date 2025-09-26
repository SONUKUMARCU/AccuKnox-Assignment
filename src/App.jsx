import { useState } from 'react'
import Dashboard from './components/Dashboard/Dashboard'
import SearchBar from './components/SearchBar/SearchBar'

function App() {

  return (
    <div className='bg-[#F0F4FA]'>
      <SearchBar/>
      <Dashboard/>
    </div>
  ) 
}

export default App
