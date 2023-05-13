import React from 'react';
import logo from "../assets/logo.svg";
import {FiSearch} from 'react-icons/fi'

const Navbar = (props) => {
    
    return (
        <div>
            <nav className="flex items-center justify-between flex-wrap bg-[#18122B] p-3">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <img src={logo} alt="logo" className='h-8 w-8' />
                    <span className='ml-2'>V Movie</span>
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">

                    </div>
                    <div className='flex items-center'>
                        <div className="relative mr-2">
                            <FiSearch className='absolute text-white top-2 left-1' />
                            <input type='text'
                                className='pl-6 h-8 border-transparent transition-all duration-700 ease-in-out bg-transparent outline-none pr-2 py-2 text-white rounded-md focus:border-white border-2'
                                placeholder="Search"
                                id="searchMovie"
                                onChange={(event) => props.setSearchmovie(event.target.value)}
                            />
                        </div>                        
                        <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Register</a>
                        <a href="#" className="inline-block text-sm ml-2 px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Login</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar