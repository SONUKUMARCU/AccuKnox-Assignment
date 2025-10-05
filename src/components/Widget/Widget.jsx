import React, { useState} from 'react'
import { useSelector } from 'react-redux'

const Widget = ({widgets}) => {

    console.log(widgets)

    return (
        <div className=''>
            {
                widgets["widgets"].map((item,index) => (
                    <div key={index}>{item.name}</div>
                ))
            }
        </div>
    )
}

export default Widget
