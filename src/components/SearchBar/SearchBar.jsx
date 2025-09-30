import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../../store/dashboardSlice';

const SearchBar = () => {

    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(setSearchTerm(e.target.value))
    }

    return (
        <div className='bg-white px-4 text-black flex justify-between py-1'>
            <p className='text-gray-400 flex items-center gap-2'>Home <IoIosArrowForward /> <span className='text-blue-500 font-medium'>Dashboard V2</span></p>
            <div className='bg-gray-100 border-1 border-gray-200 rounded-sm flex items-center gap-2 text-gray-600 px-2 min-w-sm'>
                <FiSearch />
                <input className='border-0 outline-none' type="text" name="search" placeholder='Search anything...' onChange={handleChange}/>
            </div>
        </div>
    )
}

export default SearchBar
