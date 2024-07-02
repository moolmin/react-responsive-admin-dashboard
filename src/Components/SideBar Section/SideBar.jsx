import React from 'react'
import './sidebar.css'
import { IoMdSpeedometer } from "react-icons/io";
import { MdDeliveryDining, MdOutlineExplore, MdOutlinePermContactCalendar } from "react-icons/md";
import { BsTrophy, BsCreditCard2Front } from "react-icons/bs";
import { AiOutlinePieChart } from "react-icons/ai";
import { BiTrendingUp } from "react-icons/bi";

// Imported Images =======>
import logo from '../../Assets/logo.png'

const Sidebar = () => {
    return (
        <div className='sideBar grid'>
            <div className="logoDiv flex">
                <img src={logo} alt="Image Name"/>
            </div>

            <div className="menuDiv">
                <h3 className="divTitle">
                    QUICK MENU
                </h3>
                <ul className="menuLists grid">

                    <li className="IistItem">
                        <a href="#" className="menuLink flex">
                            <IoMdSpeedometer className="icon"/>
                            <span className="smallText">
                                Dash board
                            </span>
                        </a>
                    </li>
                    <li className="IistItem">
                        <a href="#" className="menuLink flex">
                            <MdDeliveryDining className="icon"/>
                            <span className="smallText">
                                My orders
                            </span>
                        </a>
                    </li>
                    <li className="IistItem">
                        <a href="#" className="menuLink flex">
                            <MdOutlineExplore className="icon"/>
                            <span className="smallText">
                                Explore
                            </span>
                        </a>
                    </li>
                    <li className="IistItem">
                        <a href="#" className="menuLink flex">
                            <BsTrophy className="icon"/>
                            <span className="smallText">
                                Products
                            </span>
                        </a>
                    </li>


                </ul>
            </div>
            <div className="settingDiv">
                <h3 className="divTitle">
                    SETTINGS
                </h3>
                <ul className="menuLists grid">
                    <li className="IistItem">
                        <a href="#" className="menuLink flex">
                            <AiOutlinePieChart className="icon"/>
                            <span className="smallText">
                                Charts
                            </span>
                        </a>
                    </li>
                    <li className="IistItem">
                        <a href="#" className="menuLink flex">
                            <BiTrendingUp className="icon"/>
                            <span className="smallText">
                                Trends
                            </span>
                        </a>
                    </li>
                    <li className="IistItem">
                        <a href="#" className="menuLink flex">
                            <MdOutlinePermContactCalendar className="icon"/>
                            <span className="smallText">
                                Contact
                            </span>
                        </a>
                    </li>
                    <li className="IistItem">
                        <a href="#" className="menuLink flex">
                            <BsCreditCard2Front className="icon"/>
                            <span className="smallText">
                                Billing
                            </span>
                        </a>
                    </li>


                </ul>
            </div>
        </div>
    )
}

export default Sidebar



