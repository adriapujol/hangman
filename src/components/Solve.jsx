import React, { useState } from 'react'

function Solve({ setShowSolve, word, setPlayerWin, setGameOver }) {
    const [guess, setGuess] = useState('');
    const handleSolve = (e) => {
        e.preventDefault();
        if (word) setPlayerWin(true);
        setGameOver(true);
        setShowSolve(false);
    }
    const handleCancel = (e) => {
        e.preventDefault();
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
                    <h1>Solve</h1>
                    <div className="solve-msg">Type de full word and press solve if you feel brave enough.</div>
                    <input autoFocus type="text" value={guess} onChange={handleInput} />
                    <div className="solve-msg2">Remember, if you guess incorrectly, you lose! So be mindful of spelling and the number of letters the word has!</div>
                </div>
                <div className="button-box">
                    <button className="btn-play shake" onClick={handleSolve} >Solve</button>
                    <button className="btn-play shake" id="btn-cancel" onClick={handleCancel} >Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Solve