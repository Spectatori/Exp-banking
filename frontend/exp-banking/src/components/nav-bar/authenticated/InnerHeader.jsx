import React from 'react'
import CustomNavLink from "../CustomNavLink";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

const InnerHeader = () => {
    return (
        <nav className="flex justify-between bg-ghost-white p-1 items-center pt-3">
            <Link
                to='/'
            >
                <img src="/logo.png" className="w-16 h-14 ml-2" alt="" />
            </Link>

            <div>
                <div className='flex flex-row gap-5 items-center'>
                    <FaUserAlt size={22} className='text-blue-whale' />
                    <p className='text-blue-whale'>ИМЕ ПРЕЗИМЕ ФАМИЛИЯ</p>
                    <button>
                        <MdLogout className='w-16 h-7 ext-blue-whale'/>
                    </button>
                </div>     
            </div>
        </nav>
    )
}

export default InnerHeader
