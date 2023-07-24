import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setMenuOpen(isMenuOpen => !isMenuOpen);
    };


    return (

        <>
            <div className="navbar bg-slate-200 leading-10 py-1 sm:py-3 px-5 flex justify-between items-center border border-b-2 sm:justify-normal">
                <div className="logo font-bold text-lg sm:text-xl lg:text-3xl sm:leading-[50px]">NewsApp</div>
                <div className="menu sm:hidden">
                    <i className={`fa ${isMenuOpen ? "fa-xmark" : "fa-bars"} cursor-pointer`} id='hamburgerMenu' onClick={handleMenuClick}></i>
                    {isMenuOpen && <div id='subMenu' className="submenu z-10 absolute right-0 w-full bg-gray-200" >
                        <ul className=''>
                            <li className='px-2 hover:bg-white capitalize'><Link to="/">Home</Link></li>
                            {/* <li className='px-2 hover:bg-white capitalize'><Link to="/about">About</Link></li> */}
                            <li className='px-2 hover:bg-white capitalize'><Link to="/business">business</Link></li>
                            <li className='px-2 hover:bg-white capitalize'><Link to="/entertainment">entertainment</Link></li>
                            <li className='px-2 hover:bg-white capitalize'><Link to="/general">general</Link></li>
                            <li className='px-2 hover:bg-white capitalize'><Link to="/health">health</Link></li>
                            <li className='px-2 hover:bg-white capitalize'><Link to="/science">science</Link></li>
                            <li className='px-2 hover:bg-white capitalize'><Link to="/sports">sports</Link></li>
                            <li className='px-2 hover:bg-white capitalize'><Link to="/technology">technology</Link></li>
                        </ul>
                    </div>}
                </div>
                <div className="nav-links hidden sm:block mx-2 px-2">
                    <ul className='flex sm:space-x-2 lg:space-x-4 text-sm md:text-base lg:text-lg'>
                        <li className='opacity-75 hover:opacity-100 capitalize'><Link to="/">Home</Link></li>
                        {/* <li className='opacity-75 hover:opacity-100 capitalize'><Link to="/about">About</Link></li> */}
                        <li className='opacity-75 hover:opacity-100 capitalize'><Link to="/entertainment">entertainment</Link></li>
                        <li className='opacity-75 hover:opacity-100 capitalize'><Link to="/business">business</Link></li>
                        <li className='opacity-75 hover:opacity-100 capitalize'><Link to="/general">general</Link></li>
                        <li className='opacity-75 hover:opacity-100 capitalize'><Link to="/health">health</Link></li>
                        <li className='opacity-75 hover:opacity-100 capitalize'><Link to="/science">science</Link></li>
                        <li className='opacity-75 hover:opacity-100 capitalize'><Link to="/sports">sports</Link></li>
                        <li className='opacity-75 hover:opacity-100 capitalize'><Link to="/technology">technology</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )

}

export default Navbar;