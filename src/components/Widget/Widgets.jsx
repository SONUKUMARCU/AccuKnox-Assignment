import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";

const Widgets = ({setShowWidget}) => {

    return (
        <div className='fixed top-0 left-0 right-0 bottom-0 z-10 bg-black/30 flex justify-end transition-all duration-300'>
            <div className='h-full bg-white w-[35%]'>
                <div className='bg-blue-950 flex justify-between items-center px-4 py-2 text-white'>
                    <span>Add Widget</span>
                    <RxCross2 
                        className='cursor-pointer'
                        onClick={()=> setShowWidget(false)}
                    /> 
                </div>
            </div>
        </div>
    )
}

export default Widgets
