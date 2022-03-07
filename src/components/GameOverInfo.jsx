import React from 'react';
import bearWin from '../img/bear_win.png';
import bearLose from '../img/bear_lose.png';

function GameOverInfo({ word, definition, playerWin, startGame }) {
    return (
        <div className='modal-container'>
            <div className="modal">
                <h1>
                    {
                        playerWin ? "YAY! YOU WON!" : "OOOH! YOU LOST!"
                    }
                </h1>
                <img src={playerWin ? bearWin : bearLose} alt="bear" />
                <p>
                    The word was <span className={playerWin ? "succeed" : "failed"}>{word}</span>
                </p>
                {(definition !== "") && <p className='definition'>Definition: {definition}</p>}
                <button className="btn-play shake" onClick={() => startGame()} >Play again</button>
            </div>
        </div>
    )
}

export default GameOverInfo;