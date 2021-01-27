import React from "react";

function Header() {
    return (
        <header className="bg-white flex flex-col">
            <h1 className="mx-auto my-9 text-center">
                <div className="text-3xl ">
                    Best design for startups & scaleups state of the art
                </div>
                <div className="text-9xl">products</div>
                <div className="text-9xl">
                    <span className="text-gray-400">&</span>brands
                </div>
            </h1>
            <div className="mx-auto my-10 flex flex-col">
                <button className="bg-black text-white rounded p-5 font-semibold">
                    Book a call
                </button>
                <p className="text-gray-700">Avg response time: 1min</p>
            </div>
        </header>
    );
}

export default Header;
