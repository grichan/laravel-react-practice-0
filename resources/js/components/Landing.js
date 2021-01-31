import React from "react";
import Header from "./Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faCalendar, faCheckCircle } from '@fortawesome/free-regular-svg-icons'

function Landing() {
    return (
        <div>
            <Header />
            <div className="flex bg-white my-24">
                <picture className="mx-auto">
                    <source src="ghost.webp" type="img/webp" />
                    <img src="ghost.webp" alt="orange-ghost-by-serrete" />
                </picture>
            </div>
            <div className="bg-black text-white my-32">
                <p className="text-2xl text-center py-5">
                    More than 150 clients
                </p>
                <div className="pb-9">
                    <div class="tech-slideshow">
                        <div class="mover-1"></div>
                        <div class="mover-2"></div>
                    </div>
                </div>
            </div>
            <div className="bg-white mx-56 my-16 text-center">
                <h2 className="text-7xl">How We Deliver</h2>
                <p className="p-20 text-xl">
                    We build impactful UX design and branding for product-led companies around the world. Using the industry-proven methods Jobs to be Done and Design Sprints, we've developed a highly optimised process that brings results in just a few weeks.
                </p>
                <div className="flex flex-row justify-around">
                    <div className="flex flex-col text-left">
                        <img src="https://placeimg.com/200/200/cats" alt=""/>
                        <h3 className="text-6xl py-5">Products</h3>
                        <p className="text-lg flex flex-col">
                            <div>
                                <FontAwesomeIcon icon={faClock} size="lg" /> 5-8 weeks duration <br />
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faCalendar} size="lg" /> 3-4 weeks lead time <br/>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faCheckCircle} size="lg" /> Deliverables: <br/>
                            </div>
                            <ul className="pt-3">
                                <li>· JTBD Workshop</li>
                                <li>· UX Research</li>
                                <li>· Information Architecture</li>
                                <li>· Wireframes (fuli UX design)</li>
                                <li>· Usability Testing</li>
                                <li>· UI Mockups (fuli product design)</li>
                                <li>· Iconography</li>
                                <li>· Design System</li>
                            </ul>
                            <button className="bg-black text-white rounded p-1 font-semibold my-3 w-44 mx-auto">
                                Find out more
                            </button>
                        </p>
                    </div>
                    <div className="text-6xl mt-32 flex flex-col text-left">
                        <img src="https://placeimg.com/200/200/dogs" alt=""/>
                        <h3 className="py-5">Branding</h3>
                        <p className="text-lg flex flex-col">
                            <div>
                                <FontAwesomeIcon icon={faClock} size="lg" /> 5-8 weeks duration <br />
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faCalendar} size="lg" /> 3-4 weeks lead time <br/>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faCheckCircle} size="lg" /> Deliverables: <br/>
                            </div>
                            <ul className="pt-3">
                                <li>· Branding Workshop</li>
                                <li>· Multiple logo design concepts</li>
                                <li>· Custom illustrations and patterns</li>
                                <li>· Color Palette</li>
                                <li>· Typography</li>
                                <li>· Social Media Designs</li>
                                <li>· Collateral</li>
                                <li>· Brand Styleguide</li>
                            </ul>
                            <button className="bg-black text-white rounded p-1 font-semibold my-3 w-44 mx-auto">
                                Explore more
                            </button>
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-indigo-800 transform transition duration-1000 ease-in-out hover:scale-95 motion-reduce:transform-none rounded-3xl p-32 m-5 flex flex-row justify-between">
                <div className="">
                    <h2 className="text-8xl text-white">App</h2>
                    <p className="text-xl text-white py-5">Intuitive UI/UX experience for crypto</p>
                        <button className="bg-black text-white rounded-full p-1 font-semibold my-3 w-20 mx-1">
                            Design
                        </button>
                        <button className="bg-black text-white rounded-full p-1 font-semibold my-3 w-20 mx-1">
                            Brand
                        </button>
                </div>
                <div className="left-3">
                    <img src="./phone.png" alt="" className=""/>
                </div>
            </div>
                        <div className="bg-space_gray transform transition duration-1000 ease-in-out hover:scale-95 motion-reduce:transform-none rounded-3xl p-32 m-5 flex flex-row justify-between">
                <div className="">
                    <h2 className="text-8xl text-black">Other</h2>
                    <p className="text-xl text-black py-5">Transforming something to something else</p>
                        <button className="bg-white text-black rounded-full p-1 font-semibold my-3 w-20 mx-1">
                            Design
                        </button>
                        <button className="bg-white text-black rounded-full p-1 font-semibold my-3 w-20 mx-1">
                            Brand
                        </button>
                </div>
                <div className="left-3">
                    <img src="./7.jpg" alt="" className=""/>
                </div>
            </div>
                        <div className="bg-indigo-500 transform transition duration-1000 ease-in-out hover:scale-95 motion-reduce:transform-none rounded-3xl p-32 m-5 flex flex-row justify-between">
                <div className="">
                    <h2 className="text-8xl text-white">App</h2>
                    <p className="text-xl text-white py-5">Intuitive UI/UX experience for crypto</p>
                        <button className="bg-black text-white rounded-full p-1 font-semibold my-3 w-20 mx-1">
                            Design
                        </button>
                        <button className="bg-black text-white rounded-full p-1 font-semibold my-3 w-20 mx-1">
                            Brand
                        </button>
                </div>
                <div className="left-3">
                    <img src="./phone.png" alt="" className=""/>
                </div>
            </div>
        </div>
    );
}

export default Landing;
