import React from "react";

function Navigation() {
    return (
        <nav className="w-full">
            <ul className="flex w-full justify-between">
                <ul className=" ">
                    <li>Home</li>
                    <li>Creative Title</li>
                </ul>
                <li id="nav-logo"></li>
                <ul>
                    <li>About</li>
                    <li>
                        <button className="bg-black text-white rounded p-1 font-semibold">
                            Contact Us
                        </button>
                    </li>
                </ul>
            </ul>
        </nav>
    );
}

export default Navigation;
