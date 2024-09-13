import React from 'react'

const ProfileDetailsNavLink = ({ onClick, icon, text, isActive }) => {   
    return (
        <div className='flex flex-col items-center gap-2'>
            <div className='flex bg-azure border rounded-full size-12 items-center justify-center'>
                <img
                    src={icon}
                    alt=""
                    className='size-6'
                />
            </div>
            <button 
                className={isActive 
                    ? "relative block w-fit after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:bg-dark-blue after:w-full "
                    : "relative block w-fit after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:bg-dark-blue after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center"
                }
                onClick={onClick}
            >
                {text}
            </button>
        </div>
    )
}

export default ProfileDetailsNavLink
