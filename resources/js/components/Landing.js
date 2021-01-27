import React from "react";
import Header from "./Header";

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
            <div className="bg-white mx-56 my-20 text-center">
                <h2 className="text-7xl">How We Deliver</h2>
                <p className="p-20 text-xl">
                    We build impactful UX design and branding for product-led companies around the world. Using the industry-proven methods Jobs to be Done and Design Sprints, we've developed a highly optimised process that brings results in just a few weeks.
                </p>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col">
                        <img src="https://placeimg.com/200/200/cats" alt=""/>
                        <h3 className="text-6xl">Products</h3>
                    </div>
                    <div className="text-6xl mt-32 flex flex-col">
                        <img src="https://placeimg.com/200/200/dogs" alt=""/>
                        <h3>Branding</h3>
                        <p className="text-lg">
                             5-8 weeks duration

                            3-4 weeks lead time

                            Deliverables:

                            · JTBD Workshop

                            · UX Research

                            · Information Architecture

                            · Wireframes (full UX design)

                            · Usability Testing

                            · UI Mockups (full product design)

                            · Iconography

                            · Design System
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
