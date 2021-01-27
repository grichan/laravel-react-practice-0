import React from "react";
import ReactDOM from "react-dom";
import Navigation from "./Navigation";
import Landing from "./Landing";

function App() {
    return (
        <div className="w-full">
            <Navigation />
            <Landing />
        </div>
    );
}

export default App;

// DOM element
if (document.getElementById("App")) {
    ReactDOM.render(<App />, document.getElementById("App"));
}
