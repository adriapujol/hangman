import React, { useState } from 'react'

function Solve({ setShowSolve, word, setPlayerWin, setGameOver }) {
    const [guess, setGuess] = useState('');
    const handleSolveClick = (e) => {
        e.preventDefault();
        if (word) setPlayerWin(true);
        setGameOver(true);
        setShowSolve(false);
    }

    const handleInput = (e) => {
        e.preventDefault();
        setGuess(e.target.value.toLowerCase());
    }

    return (
        <div className='modal-container'>
            <div className="modal">
                <div className="solve">
                    <input autoFocus type="text" value={guess} onChange={handleInput} />
                </div>
                <button className="btn-play shake" onClick={handleSolveClick} >Okay!</button>
            </div>
        </div>
    )
}

export default Solve