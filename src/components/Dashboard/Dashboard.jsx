import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import dashboarData from "../../data/dashboardData.json"
import { useSelector } from 'react-redux';

const Dashboard = () => {

    const { categories, searchTerm } = useSelector((state)=> state.dashboard);



    const filteredCategories = categories.map((category) => (
        {
            ...category,
            widgets : category.widgets.filter(widget => widget.name.toLowerCase().includes(searchTerm.toLowerCase()))
        }
    ));


    return (
        <div className='w-full h-screen mt-5'>
            <div className='flex justify-between px-6 py-4'>
                <h1 className='text-2xl font-medium'>CNAPP Dashboard</h1>
                <button className='bg-white border-1 border-gray-200 rounded-md p-2 flex items-center gap-2 text-sm cursor-pointer'>
                    Add Widget
                    <FaPlus className='text-gray-400' />
                </button>
            </div>

            <div className='px-8 flex flex-col gap-4 mt-5'>
                {
                    filteredCategories.map((item, index) => (
                        <div key={index}>
                            <h1 className='text-md font-medium'>{item.category}</h1>
                            <div className='flex gap-4'>
                                {
                                    item.widgets.length > 0 ? (
                                        item.widgets.map((widget) => (
                                            <div className='bg-white px-3 py-2 rounded-md w-96 h-40 drop-shadow-lg' key={widget.id}>
                                                <h2>{widget.name}</h2>
                                                <p className='text-gray-500 text-sm'>{widget.text}</p>
                                            </div>
                                        ))
                                    ) : (
                                        <p className='text-gray-400 italic'>No widget found</p>
                                    )
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Dashboard
