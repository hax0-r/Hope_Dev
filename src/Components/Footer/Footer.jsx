import React from 'react'
import NAVBAR_DATA from '../Navbar/NAVBAR_DATA'
import { NavLink } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <div className="footerCom">
                <div className="main">
                    <div className="head">
                        <h2>Signup our newsletter to get update
                            information, news, insights or promotions.</h2>
                        <div className="input">
                            <input type="text" placeholder='Enter Email' />
                            <button>SignUp</button>
                        </div>
                    </div>
                    <div className="content">
                        <div className="left">
                            <h5>Find out how we can help you
                                scale your business and take it to
                                new heights.</h5>
                            <p>Simply fill this form and get into contact with us today!</p>
                            <div className="links-icon">
                            </div>
                        </div>
                        <div className="mid">
                            <h5>Quick Links</h5>
                            <ul>
                                {
                                    NAVBAR_DATA.map((val) => {
                                        return (
                                            <li>
                                                <NavLink to={val.navPath} hre>{val.navTitle} </NavLink>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="right">

                            <div className="twoDiv">
                                <input type="text" name="" id="" placeholder='First Name' />
                                <input type="text" name="" id="" placeholder='Last Name' />
                            </div>
                            <input type="text" name="" id="" placeholder='Email' />
                            <input type="text" name="" id="" placeholder='Phone Number' />
                            <input type="text" name="" id="" placeholder='What kind of service do you need?' />
                            <textarea name="" id="" placeholder='Message' ></textarea>
                            <button>Send Message</button>
                        </div>
                    </div>
                </div>
                <div className="hr"></div>
                <div className="bottom">
                    <p>Copyright © 2023 Software House, All rights reserved.</p>
                </div>
            </div>
        </>
    )
}
