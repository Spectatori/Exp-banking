import React from 'react'
import { Link } from 'react-router-dom'

const IconLinkCard = ({ title, icon, url, bubble }) => {
    return (
        <div className='flex flex-col group h-full text-center items-center'>
            <Link
                to={url}
                className='flex flex-col items-center space-y-5'
            >
                <div className='flex items-center justify-center relative w-48'>
                    <img src={icon} alt="" className='size-32 md:size-44 transition-transform duration-300 ease-in-out transform hover:scale-110' />

                    <div
                        className={`absolute bottom-0 right-0 flex border rounded-full size-10 md:size-12 items-center justify-center 
                        ${bubble === 'create' ? 'bg-kelly-green' : 'bg-azure'}`}>
                        <span className='font-bold text-4xl text-white'>
                            {bubble === 'create' && '+'}
                            {bubble === 'info' && '!'}
                            {bubble === 'calculate' && '$'}         
                        </span>
                    </div>
                </div>
                <h3 className='text-2xl font-semibold text-blue-whale text-wrap'>{title}</h3>
            </Link>
        </div>
    )
}

export default IconLinkCard

