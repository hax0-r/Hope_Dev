import React, { useEffect, useRef } from 'react'
import PageFourCard from '../../Components/PageFourCard/PageFourCards'
import PAGE_FOUR_DATA from '../../Components/PageFourCard/PAGE_FOUR_DATA.JS'
import PageSevenCard from '../../Components/PageSevenCard/PageSevenCard'
import PAGE_SEVEN_DATA from '../../Components/PageSevenCard/PAGE_SEVEN_DATA'
import homeImg from '../../Assets/home.png'
import Navbar from '../../Components/Navbar/Navbar'
import { TiStarFullOutline } from "react-icons/ti";
import gsap from "gsap";



export default function page1() {
    const star = useRef();

    useEffect(() => {
        gsap.to(star.current, {
            rotate: "360",
            repeat: -1,
            ease: "none",
            duration: 5
        })
    }, [])

    return (
        <>
            <div className="home">
                <div className="page1">
                    <Navbar />
                    <section>
                        <div className="left">
                            <div className="page1-star">
                                <div className="star-home" ref={star}><TiStarFullOutline /></div>
                                <h5>DIGITAL MARKETING AGENCY</h5>
                            </div>
                            <h1>Best Digital Marketing Agency</h1>
                            <p>Boost your digital success with The Ali Marketing, the SEO-savvy experts delivering tailored strategies to skyrocket your online visibility and drive remarkable business growth.</p>
                            <button className="button">
                                <span>Get Started </span>
                            </button>
                        </div>
                        <div className="right">
                            <img src={homeImg} alt="" />
                        </div>
                    </section>
                </div>
                {/* <div className="page2">
                    <h1>Our Process</h1>
                    <div className="processPage">
                        {
                            PROCESS_CARD_DATA.map((val) => {
                                return (
                                    <ProcessCard
                                        heading={val.heading}
                                        para={val.para}
                                        img={val.img}
                                    />
                                )
                            })
                        }
                    </div>
                    <button>Learn More</button>
                </div>
                <div className="page3">
                    <div className="main">
                        <h1>Take your business to the next level</h1>
                        <p>You’ll be receiving a fully customized breakdown of how you can change your business and implement some of the secrets that we have used to generate hundreds of thousands of dollars in profit, both for ourselves and for our clients.<br /> <br />

                            Firstly we’ll evaluate your business and use our advanced tools to asses your website & where you’ve been going wrong all this time, as well as also develop a strategic blueprint to dramatically skyrocket your sales, both consistently and efficiently<br /><br />

                            We’ll help you reveal where your dream clients have been hiding all along and how you can easily persuade them to become loyal customers and subscribers. We will delve right into the depths of your industry, even by using our tools to find out the exact keywords and demographics that your competition has been targeting, to see what works best for you and your business<br /><br />

                            By combining all of this with our Santa’s bag of endless goodies, we’ll be able to exponentially increase your traffic, your leads and most importantly, your sales. Take the leap of faith and become the LEADER of your industry!<br /><br />

                        </p>
                    </div>
                </div> */}
                <div className="page4">
                    <div className="head">
                        <h1>What we’ll do for you</h1>
                        <p> thousandsof products and offer continuous addition and monthly campaign optimization.</p>
                    </div>
                    <div className="content">
                        {
                            PAGE_FOUR_DATA.map((val) => {
                                return (
                                    <PageFourCard
                                        img={val.img}
                                        head={val.heading}
                                        para={val.para}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
                {/* <div className="page5">
                    <div className="main">
                        <div className="left">
                            <h1>Content Creation</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            <button>Learn More</button>
                        </div>
                        <div className="right">
                            <img src={page5Right} alt="" />
                        </div>
                    </div>
                </div> */}
                {/* <div className="page6">
                </div> */}
                <div className="page7">
                    <div className="main">
                        <div className="left">
                            <h4>WHY CHOOSE US</h4>
                            <h1>One-stop digital marketing services</h1>
                            <p>Supercharge your online presence with our Digital Marketing Agency. We excel in SEO, Social Media Marketing, and content creation. Dominate search rankings, engage customers, and drive targeted traffic. Partner with us for unparalleled digital success..</p>
                            <button>Get Started</button>
                        </div>
                        <div className="right">
                            <div className="page7Card">
                                {
                                    PAGE_SEVEN_DATA.map((a) => {
                                        return (
                                            <PageSevenCard
                                                img={a.img}
                                                head={a.head}
                                                para={a.para}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}
