import React from 'react'
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { useUserStore } from '../../../stores/AuthStore';
import { useNavigate } from 'react-router-dom';
import AuthNavbar from './AuthNavbar';

const InnerHeader = () => {
    const { user, clearUser } = useUserStore();
    const navigate = useNavigate();

    const handleLogout = () => {
        clearUser();
        navigate('/auth/login');
    }

    return (
        <nav className="flex justify-between bg-ghost-white p-1 items-center pt-3">
            <div className='flex'>
            <Link
                to='/account-overview'
            >
                <img src="/logo.png" className="w-16 h-14 ml-2" alt="" />
            </Link>
            <AuthNavbar />
            </div>
            
            <div>
                <div className='flex flex-row gap-5 items-center'>
                    <FaUserAlt size={22} className='text-blue-whale' />
                    <Link
                        to='/profile'
                    >
                        <p className='text-blue-whale uppercase'>{`${user.firstname} ${user.secondname} ${user.lastname}`}</p>
                    </Link>
                    <button>
                        <MdLogout onClick={handleLogout} className='w-16 h-7 ext-blue-whale' />
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default InnerHeader
