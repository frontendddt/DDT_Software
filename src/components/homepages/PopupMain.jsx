// App.js
import React, { useState, useEffect } from 'react';
import Popup from './Popup';

const App = () =>
{
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() =>
    {
        const hasVisited = localStorage.getItem('hasVisited');
        if (!hasVisited)
        {
            setShowPopup(true);
            localStorage.setItem('hasVisited', 'true');
        }
    }, []);

    const closePopup = () =>
    {
        setShowPopup(false);
    };

    return (
        <div>
            <h1>Welcome to My Website</h1>

            {showPopup && <Popup message="Welcome to our website for the first time!" onClose={closePopup} />}
        </div>
    );
};

export default App;
