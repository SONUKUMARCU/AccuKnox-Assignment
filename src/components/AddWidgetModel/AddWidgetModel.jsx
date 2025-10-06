import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { useSelector } from 'react-redux';
import Widget from '../Widget/Widget';

const AddWidgetModel = ({ setShowWidget }) => {

    const { categories } = useSelector((state) => state.dashboard)

    const [activeCategory, setActiveCategory] = useState(categories[0]?.category || "")

    const selectedCategory = categories.find((item) => item.category === activeCategory);

    return (
        <div className='fixed top-0 left-0 right-0 bottom-0 z-10 bg-black/30 flex justify-end transition-all duration-300'>
            <div className='h-full flex flex-col bg-white w-[35%]'>
                <div className='bg-blue-950 flex justify-between items-center px-4 py-2 text-white'>
                    <span>Add Widget</span>
                    <RxCross2
                        className='cursor-pointer text-2xl'
                        onClick={() => setShowWidget(false)}
                    />
                </div>
                <p className='text-gray-500 px-4 py-2'>Personalise your dashboard by adding the following widget</p>

                <div className='border-b-1 border-gray-200'>
                    <div className='flex gap-4 px-4'>
                        {
                            categories.map((item, index) => (
                                <span
                                    key={index}
                                    onClick={() => setActiveCategory(item.category)}
                                    className={`${activeCategory === item.category ? "border-b-2 border-blue-950 bg-black/10 scale-100" : "text-gray-500 scale-95"} p-2 cursor-pointer transition-all duration-200`}
                                >
                                    {item.category}
                                </span>
                            ))
                        }
                    </div>
                </div>

                <Widget widgets={selectedCategory} setShowWidget={setShowWidget}/>
            </div>
        </div>
    )
}

export default AddWidgetModel
