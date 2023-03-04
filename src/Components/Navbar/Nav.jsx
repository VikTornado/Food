import React from 'react';
import {TbTruckDelivery} from "react-icons/tb";
import {MdFavorite, MdHelp} from "react-icons/md";
import {FaUserFriends, FaWallet} from "react-icons/fa";
import {AiFillTag} from "react-icons/ai";

const Nav = () => {
    return (
        <div>
            <nav>
                <ul className={"flex flex-col p-4 text-gray-800"}>
                    <li className={"text-xl py-4 flex"}><TbTruckDelivery size={25} className={"mr-4"}/>
                        Orders
                    </li>
                    <li className={"text-xl py-4 flex"}><MdFavorite size={25} className={"mr-4"}/>
                        Favorite
                    </li>
                    <li className={"text-xl py-4 flex"}><MdHelp size={25} className={"mr-4"}/>
                        Help
                    </li>
                    <li className={"text-xl py-4 flex"}><FaWallet size={25} className={"mr-4"}/>
                        Wallet
                    </li>
                    <li className={"text-xl py-4 flex"}><FaUserFriends size={25} className={"mr-4"}/>
                        Users
                    </li>
                    <li className={"text-xl py-4 flex"}><AiFillTag size={25} className={"mr-4"}/>
                        Promotions
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;
