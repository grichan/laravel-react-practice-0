import React from "react";

function BigCard(props) {
    console.log("p", props);
    return (
        <div
            className={
                props.color +
                " transform transition duration-1000 ease-in-out hover:scale-95 motion-reduce:transform-none rounded-3xl p-3 m-5 h-full min-h-screen flex sm:flex-col lg:flex-row flex-wrap justify-between"
            }
        >
            <div className="p-12">
                <h2 className="text-7xl text-white">{props.name}</h2>
                <p className="text-xl text-white py-5">{props.description}</p>
                <button className="bg-black text-white rounded-full p-1 font-semibold my-3 w-20 mx-1">
                    Design
                </button>
                <button className="bg-black text-white rounded-full p-1 font-semibold my-3 w-20 mx-1">
                    Brand
                </button>
            </div>
            <div className="left-3 max-w-sm">
                <img src="./iphone.png" alt="" className="" />
            </div>
        </div>
    );
}

export default BigCard;
