import React from 'react'
import { NavLink } from 'react-router-dom'

const CustomNavLink = ({ url, title }) => {
    return (
        <NavLink
            to={url}
            className={({ isActive }) =>
                isActive ?
                    "relative block w-fit after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:bg-dark-blue after:w-full "
                    :"relative block w-fit after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:bg-dark-blue after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center"
            }
        >
            {title}
        </NavLink>
    )
}

export default CustomNavLink
