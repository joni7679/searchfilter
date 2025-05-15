import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  const [isopen, SetisOpen] = useState(false);

  return (
    <>
      <main className='w-full bg-gray-900 h-screen'>
        <Navbar />
        <div className="flex md:flex-row items-start">
          <div className={`${isopen ? "w-0" : "md:w-[20%]"}`}>
            <Sidebar isopen={isopen} SetisOpen={SetisOpen} />
          </div>
          <div className={`w-full bg-gray-900 ${isopen ? "md:w-full" : "md:w-[80%]"}`}>
            <Outlet /> 
          </div>
        </div>
      </main>
    </>
  )
}

export default App;
