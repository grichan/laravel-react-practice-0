import React from "react";
import Header from "./Header";
import BigCard from './BigCard';
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
            <div className="bg-white my-16 text-center flex-col justify-center">
                <h2 className="text-7xl">How We Deliver</h2>
                <p className="p-20 text-xl">
                    We build impactful UX design and branding for product-led companies around the world. Using the industry-proven methods Jobs to be Done and Design Sprints, we've developed a highly optimised process that brings results in just a few weeks.
                </p>
                <div className="flex flex-row flex-wrap justify-around">
                    <div className="flex flex-col text-left max-w-md">
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
                    <div className="text-6xl mt-32 flex flex-col text-left max-w-md">
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
            <div>
                <div >

                    <BigCard
                        img="./robot.png"
                        name="App 1"
                        color="bg-indigo-800"
                        description="Intuitive UI/UX experience for crypto"
                    />
                    <BigCard
                        img="./7.jpg"
                        name="Other"
                        color="bg-space_gray"
                        description="Transforming something to something else"
                    />
                    <BigCard
                        img="./iphone.png"
                        name="App"
                        color="bg-indigo-500"
                        description="Intuitive UI/UX experience for crypto"
                    />
                    </div>
             </div>
        </div>
    );
}

export default Landing;
