import React from 'react';
import logo from "../assets/logo.png";

const Navbar = () => {
    return (
        <div>
            <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-3">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <img src={logo} alt="logo" className='h-8 w-8' />
                    <span className="font-semibold text-xl tracking-tight">V Movie</span>
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        
                    </div>
                    <div>
                    <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Register</a>
                        <a href="#" className="inline-block text-sm ml-2 px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Login</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar