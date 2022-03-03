import React from 'react'

function GameOverInfo({ word, playerWin }) {
    return (
        <div className='modal-container'>
            <div className="modal">
                <button className="close-modal">
                    <div ></div>
                    <div id='bar-2'></div>
                </button>
                <p>
                    {
                        playerWin ? "YOU WON" : "YOU LOST"
                    }
                </p>
                <p>
                    {
                        `The word was ${word}`
                    }
                </p>
            </div>
        </div>
    )
}

export default GameOverInfo;