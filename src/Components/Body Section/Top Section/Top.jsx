import React from 'react'
import './top.css'

// Imported Icons ======>
import { BiSearchAlt } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { IoNotificationsOutline } from "react-icons/io5";
import {BsArrowRight, BsQuestionCircle} from "react-icons/bs";

// Imported Image ======>
import img from "../../../Assets/user(1).png"
import img2 from "../../../Assets/user(2).png"
import video from "../../../Assets/video.mp4"

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
                    <p>The world's fast growing industry today are natural made products!</p>

                    <div className="buttons flex">
                        <div className="btn">Explore More</div>
                        <div className="btn transparent">Top Sellers</div>
                    </div>

                    <div className="videoDiv">
                        <video src={video} autoPlay loop muted></video>
                    </div>
                </div>

                <div className="leftCard felx">
                    <div className="main flex">

                        <div className="textDiv">
                            <h1>My Stat</h1>

                            <div className="flex">
                                <span>
                                    Today <br/> <small>4 Orders</small>
                                </span>
                                <span>
                                    This Month <br/> <small>127 Orders</small>
                                </span>
                            </div>

                            <span className="flex link">
                                Go to my orders <BsArrowRight className="icon"/>
                            </span>
                        </div>

                        <div className="imgDiv">
                            <img src={img2} alt="User2"/>
                        </div>

                        {/*<div className="sideBarCard">*/}
                        {/*    <BsQuestionCircle className="icon"/>*/}
                        {/*    <div className="cardContent">*/}
                        {/*        <div className="circle1"></div>*/}
                        {/*        <div className="circle1"></div>*/}
                        {/*        <h3>Help Center</h3>*/}
                        {/*        <p>Having troulble in Moolhub, please contact us from for more questions.</p>*/}
                        {/*        <button className="btn">Go to help center</button>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Top