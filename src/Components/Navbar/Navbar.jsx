import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from "react-icons/ai"
import {BsFillCartFill} from "react-icons/bs";
import Nav from "./Nav";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    return (
        <div className={"max-w-[1640] mx-auto  items-center p-4"}>
            <div className="flex items-center  justify-between container mx-auto">
                <div className='flex items-center'>
                <div onClick={() => setNav(!nav)} className={"flex items-center"}>
                    <div className={"cursor-pointer mr-10"}>
                        <AiOutlineMenu size={50}/>
                    </div>
                    </div>
                    <h1 className={"text-2xl sm:text-3xl lg:text-4xl"}>
                        Best <span className={"font-bold"}>Eats</span>
                    </h1>
                    <div className={"hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]"}>
                        <p className={"bg-black text-white rounded-full p-2"}>Delivery</p>
                        <p>Pickup</p>
                    </div>
                    </div>
                <div
                    className={"bg-gray-200 rounded-full items-center flex p-2 " +
                        "w-[200px] sm:w-[400px] lg:w-[500px]"}>
                    <AiOutlineSearch/>
                    <input className={"bg-transparent p-2 w-full focus: outline-none"} type={"text"}
                           placeholder={"Search food"}/>
                </div>
                <button
                    className={"bg-black text-white hidden md:flex ml-5 border border-black" +
                        " rounded-full p-3"}>
                    <BsFillCartFill size={20} className={"mr-2"}/> Cart
                </button>
                {/*buttonMenu*/}
                {nav ? <div className={"bg-black bg-opacity-80 fixed w-full " +
                    "h-screen z-10 top-0 left-0"}></div> : ""}
                {/*    sideMenu*/}
                <div
                    className={nav ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300" :
                        "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}>
                    <AiOutlineClose onClick={() => setNav(!nav)} size={30}
                                    className={"absolute right-4 top-4 cursor-pointer"}/>
                    <h2 className={"text-2xl p-4"}>Best <span className={"font-bold"}>East</span></h2>
                   <Nav/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
