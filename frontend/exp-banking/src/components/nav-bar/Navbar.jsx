import React from "react";
import { Link } from "react-router-dom";
import CustomNavLink from "./CustomNavLink";

const Navbar = () => {
    return (
        <nav className="flex gap-12 bg-ghost-white p-1 items-center">
            <Link
                to='/'
            >
                <img src="/logo.png" className="size-12 ml-2" alt="" />
            </Link>
            
            <ul className="flex gap-8 text-blue-whale [&>*]:px-3">
                <CustomNavLink url='/za-teb' title='За теб'/>
                <CustomNavLink url='/za-tvoya-biznes' title='За твоя бизнес'/>
                <CustomNavLink url='/za-exp-bank' title='За Exp Bank'/>
            </ul>
        </nav>
    );
};

export default Navbar;
