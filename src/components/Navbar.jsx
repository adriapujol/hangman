import React, { useState } from 'react';
import Info from './Info';

function Navbar({ won, played }) {
    const [showInfo, setShowInfo] = useState(false)
    return (
        <nav className='nav'>
            {showInfo && <Info setShowInfo={setShowInfo} />}
            <div className="nav-content">
                <div className="info">
                    <button onClick={() => setShowInfo(true)}>?</button>
                </div>
                <div className="title">Hangman</div>
                <div className="score">{`score: ${won}/${played}`}</div>
            </div>
        </nav>
    )
}

export default Navbar;