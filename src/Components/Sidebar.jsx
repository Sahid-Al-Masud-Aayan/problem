// Sidebar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoHome } from 'react-icons/io5';
import { FaAddressCard, FaListAlt, FaGithub, FaFacebook, FaLinkedin, FaFileAlt } from 'react-icons/fa';
import { MdSettingsSuggest, MdContactPhone } from 'react-icons/md';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaTableList } from 'react-icons/fa6';
import Lottie from 'lottie-react';
import reactAnimation from '../../public/react.json'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-40 md:hidden ${isOpen ? 'block' : 'hidden'}`} onClick={toggleSidebar}></div>
      <div className={`w-[280px] min-h-screen bg-gradient-to-r from-[#662D8C] to-[#ED1E79] flex justify-center z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out fixed md:relative`}>
      <ul>
        <div className="container">
            <div className=" flex flex-col gap-3">
                <div className=" flex flex-col justify-center items-center">
                <img className=' md:h-[160px] w-[110px] md:w-[160px] h-[110px] md:mt-4 mt-[90px] rounded-full ' src="public\prf1.jpg" alt="Logo" />
                    <h3 className='text-[#c3c3c3] font-semibold text-[21px] md:text-[26px] text-center font-oswaldHd'>Sahid Al Masud Aayan</h3>
                <div className="flex scale-[0.8] md:scale-100 justify-center gap-2 items-center">
                    <Lottie className='w-10 h-10' animationData={reactAnimation}/>
                <p className=' text-[#303030] text-[18px] font-bold text-center mt-2 font-merri'>React Developer</p>
                </div>
                </div>
            </div>
            </div>
          <div className="md:mt-[90px] mt-[20px]">
          <NavLink to='/' className={({isActive}) => isActive ? "flex justify-start items-center gap-4 px-5 py-2  backdrop-blur-lg bg-white/30 text-[24px]  text-[#fff] font-nav rounded-lg duration-200":"rounded-lg flex justify-start items-center gap-4 px-5 py-2  hover:backdrop-blur-lg hover:bg-white/30  text-[24px]  text-white font-nav duration-200 "}>
            <IoHome className='text-[24px] text-white'/> 
             Home
            </NavLink>
            </div>
            <div className="mt-[20px]">
            <NavLink to='/about' className={({isActive}) => isActive ? "flex justify-start items-center gap-4 px-5 py-2  backdrop-blur-lg bg-white/30 text-[24px]  text-[#fff] font-nav rounded-lg duration-200":"rounded-lg flex justify-start items-center gap-4 px-5 py-2  hover:backdrop-blur-lg hover:bg-white/30  text-[24px]  text-white font-nav duration-200 "}>
            <FaAddressCard className=' text-[24px] text-white'/>
            About
            </NavLink>
            </div>
            <div className="mt-[20px]">
            <NavLink to='/projects' className={({isActive}) => isActive ? "flex justify-start items-center gap-4 px-5 py-2  backdrop-blur-lg bg-white/30 text-[24px]  text-[#ffffff] font-nav rounded-lg duration-200":"rounded-lg flex justify-start items-center gap-4 px-5 py-2  hover:backdrop-blur-lg hover:bg-white/30  text-[24px]  text-white font-nav duration-200"}>
            <MdSettingsSuggest className=' text-[24px] text-white'/> 
            Projects
            </NavLink>
            </div>
            <div className="mt-[20px]">
            <NavLink to='/skills' className={({isActive}) => isActive ? "flex justify-start items-center gap-4 px-5 py-2  backdrop-blur-lg bg-white/30 text-[24px]  text-[#fff] font-nav rounded-lg duration-200":"rounded-lg flex justify-start items-center gap-4 px-5 py-2  hover:backdrop-blur-lg hover:bg-white/30  text-[24px]  text-white font-nav  duration-200"}>
            <FaTableList className=' text-[24px] text-white'/> 
            Skills
            </NavLink>
            </div>
            <div className="mt-[20px]">
            <NavLink to='/contact' className={({isActive}) => isActive ? "flex justify-start items-center gap-4 px-5 py-2  backdrop-blur-lg bg-white/30 text-[24px]  text-[#fff] font-nav rounded-lg duration-200":"rounded-lg flex justify-start items-center gap-4 px-5 py-2  hover:backdrop-blur-lg hover:bg-white/30  text-[24px]  text-white font-nav duration-200 "}>
            <MdContactPhone className=' text-[24px] text-white'/> 
            Contact
            </NavLink>
          </div>
        </ul>
      </div>
      <div className="md:hidden flex items-center p-4 bg-gradient-to-r from-[#662D8C] to-[#ED1E79] w-full fixed top-0 z-50">
        <button onClick={toggleSidebar}>
          {isOpen ? <HiX className="text-3xl text-white" /> : <HiMenu className="text-3xl text-white" />}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;