import React from 'react'
import ProcessCard from '../../Components/ProcessCard/ProcessCard'
import PROCESS_CARD_DATA from '../../Components/ProcessCard/PROCESS_CARD_DATA'
import PageFourCard from '../../Components/PageFourCard/PageFourCards'
import PAGE_FOUR_DATA from '../../Components/PageFourCard/PAGE_FOUR_DATA.JS'
import page5Right from '../page1/asset1/page5Right.png'
import PageSevenCard from '../../Components/PageSevenCard/PageSevenCard'
import PAGE_SEVEN_DATA from '../../Components/PageSevenCard/PAGE_SEVEN_DATA'
export default function page1() {
    return (
        <>
            <div className="page1">
                <section>
                    <h1>Sell Faster.</h1>
                </section>
            </div>
            <div className="page2">
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
            </div>
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
            <div className="page5">
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
            </div>
            <div className="page6">
            </div>
            <div className="page7">
                <div className="main">
                    <div className="left">
                        <h4>WHY CHOOSE US</h4>
                        <h1>Connecting people is our business.</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
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
        </>
    )
}
