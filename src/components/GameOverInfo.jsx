import React from 'react'

function GameOverInfo({ word, playerWin, startGame }) {
    return (
        <div className='modal-container'>
            <div className="modal">
                <button className="close-modal">
                    <div ></div>
                    <div id='bar-2'></div>
                </button>
                <div className="info-content"></div>
                <h1>
                    {
                        playerWin ? "YAY! YOU WON!" : "OOOH! YOU LOST!"
                    }
                </h1>
                <p>
                    The word was <span className={playerWin ? "succeed" : "failed"}>{word}</span>
                </p>
                <button className="btn-play shake" onClick={() => startGame()} >Play again</button>
            </div>
        </div>
    )
}

export default GameOverInfo;