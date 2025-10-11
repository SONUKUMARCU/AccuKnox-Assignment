import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addWidget } from "../../store/dashboardSlice"

const Widget = ({ widgets, setShowWidget, activeCategory }) => {

    const [formData, setFormData] = useState({ name: '', text: '' });
    const [selectedWidgets, setSelectedWidgets] = useState([]);

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newWidget = {
            id: Date.now(),
            name: formData.name,
            text: formData.text
        };

        dispatch(addWidget({ categoryName: activeCategory, widget: newWidget }));

        setFormData({ name: '', text: '' });

    }

    const handleCheckboxChange = (widgetid) => {
        setSelectedWidgets((prev) => prev.includes(widgetid) ? prev.filter((id) => id !== widgetid) : [...prev,widgetid]);
    }

    return (
        <div className='px-4 py-2 flex-grow flex flex-col justify-between'>
            <div>
                {
                    widgets["widgets"].map((item, index) => (
                        <div key={index} className='p-2 border border-gray-200 rounded mt-2 flex items-center gap-2 text-sm'>
                            <input
                                type="checkbox" name="widget"
                                checked={selectedWidgets.includes(item.id)}
                                onChange={() => handleCheckboxChange(item.id)}
                            />
                            <span className='text-blue-950/80'>{item.name}</span>
                        </div>
                    ))
                }
                <form className='mt-5' onSubmit={handleSubmit}>
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
