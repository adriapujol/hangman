import React from 'react';

function Navbar({ won, played }) {
    return (
        <nav className='nav'>
            <div className="nav-content">
                <div className="info">
                    <button>?</button>
                </div>
                <div className="title">Hangman</div>
                <div className="score">{`score: ${won}/${played}`}</div>
            </div>
        </nav>
    )
}

export default Navbar;