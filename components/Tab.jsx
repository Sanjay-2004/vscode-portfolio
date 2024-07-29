import React from 'react'

const Tab = ({ icon, name }) => {
    return (
        <div className='flex justify-center max-w-[13%] items-center cursor-pointer'>
            <img src={icon} alt={name} className='w-5 h-5 me-[2px]' />
            <p className='text-sm'>{name}</p>
        </div>
    )
}

export default Tab
