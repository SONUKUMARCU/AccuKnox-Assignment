import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Widget = ({ widgets, setShowWidget, activeCategory }) => {

    const [formData, setFormData] = useState({ name: '', text: '' });

    const handleChange = (e) => {
        console.log(typeof e.target.name)
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div className='px-4 py-2 flex-grow flex flex-col justify-between'>
            <div>
                {
                    widgets["widgets"].map((item, index) => (
                        <div key={index} className='p-2 border border-gray-200 rounded mt-2 flex items-center gap-2 text-sm'>
                            <input type="checkbox" name="widget" />
                            <span className='text-blue-950/80'>{item.name}</span>
                        </div>
                    ))
                }
                <form className='mt-5'>
                    <input
                        className='border-1 border-gray-300 w-full px-3 py-2 rounded-md outline-none'
                        type="text" name="name" placeholder='Enter widget name' required
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <textarea
                        rows={10}
                        className='border-1 border-gray-300 w-full px-3 py-2 rounded-md mt-2 outline-none resize-none' name="text" placeholder='Enter description...'
                        required
                        value={formData.text}
                        onChange={handleChange} 
                    ></textarea>

                    <button
                        className='bg-blue-950 text-white px-10 py-2 rounded-md mt-2 font-medium cursor-pointer'
                        type='submit'
                    >Add</button>
                </form>
            </div>
            <div className='self-end'>
                <button
                    className='px-8 py-2 rounded-md text-sm font-medium border border-gray-300 bg-white mr-4 drop-shadow-2xl cursor-pointer'
                    onClick={() => setShowWidget(false)}
                >
                    cancel
                </button>
                <button
                    className='px-8 py-2 rounded-md text-sm font-medium bg-blue-950 text-white cursor-pointer'
                    onClick={() => setShowWidget(false)}
                >confirm</button>
            </div>
        </div>
    )
}

export default Widget
