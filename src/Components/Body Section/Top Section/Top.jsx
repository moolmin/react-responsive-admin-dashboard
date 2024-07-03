import React from 'react'
import './top.css'

// Imported Icons ======>
import { BiSearchAlt } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { IoNotificationsOutline } from "react-icons/io5";

// Imported Image ======>
import img from "../../../Assets/user(1).png"

const Top = () => {
    return (
        <div className="topSection">
            <div className="headerSection flex">
                <div className="title">
                    <h1>Welcome to Moolhub.</h1>
                    <p>Hello Sumin, Welcome back!</p>
                </div>

                <div className="searchBar flex">
                    <input type="text" placeholder="Search Dashboard"/>
                    <BiSearchAlt className="icon"/>
                </div>

                <div className="adminDiv flex">
                    <TbMessageCircle className="icon"/>
                    <IoNotificationsOutline className="icon"/>
                    <div className="adminImage">
                        <img src={img} alt="Admin"/>
                    </div>

                </div>
            </div>
            <div className="cardSection flex">
                <div className="rightCard flex">
                    <h1>Create and sell extraordinary products</h1>
                </div>
            </div>
        </div>
    )
}

export default Top