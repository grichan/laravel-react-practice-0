import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation';

function App() {
    return (
        <div className="container mt-5">
            <Navigation/>
        </div>
    );
}

export default App;

// DOM element
if (document.getElementById('App')) {
    ReactDOM.render(<App />, document.getElementById('App'));
}
