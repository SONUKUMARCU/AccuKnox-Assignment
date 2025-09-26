import React from 'react'
import { FaPlus } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className='w-full h-screen'>
        <div className='flex justify-between px-4 py-2'>
            <h1 className='text-2xl font-medium'>CNAPP Dashboard</h1>
            <button className='bg-white border-1 border-gray-200 rounded-md p-2 flex items-center gap-2 text-sm cursor-pointer'>
                Add Widget
                <FaPlus className='text-gray-400' />
            </button>
        </div>
    </div>
  )
}

export default Dashboard
