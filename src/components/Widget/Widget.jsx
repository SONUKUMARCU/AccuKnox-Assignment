import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Widget = ({ widgets,setShowWidget }) => {

    return (
        <div className='mt-2 p-4 flex-grow flex flex-col justify-between'>
            <div>
                {
                    widgets["widgets"].map((item, index) => (
                        <div key={index} className='p-2 border border-gray-200 rounded mt-2 flex items-center gap-2 text-sm'>
                            <input type="checkbox" name="widget" />
                            <span className='text-blue-950/80'>{item.name}</span>
                        </div>
                    ))
                }
            </div>

            <div>
                
            </div>
            <div className='self-end'>
                <button 
                    className='px-8 py-2 rounded-md text-sm font-medium border border-gray-300 bg-white mr-4 drop-shadow-2xl cursor-pointer'
                    onClick={()=> setShowWidget(false)}
                >
                        cancel
                    </button>
                <button 
                    className='px-8 py-2 rounded-md text-sm font-medium bg-blue-950 text-white cursor-pointer'
                >confirm</button>
            </div>
        </div>
    )
}

export default Widget
