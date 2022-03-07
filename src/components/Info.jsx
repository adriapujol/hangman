import React from 'react';

function Info({ setShowInfo }) {
    return (
        <div className='modal-container'>
            <div className="modal">
                <div className="info-content">
                    <h1>Instructions</h1>
                    <ul>
                        <li>Try to guess the word one letter at a time.</li>
                        <li>Evey correct guess will reveal the letter and her position.</li>
                        <li>Every incorrect guess will bring you one step closer to losing.</li>
                        <li>You can use the solve button if you already know the word. But be careful! If you're wrong you'll lose.</li>
                        <li>Have fun!</li>
                    </ul>

                </div>
                <button className="btn-play shake" onClick={() => setShowInfo(false)} >Okay!</button>
                <div className="credits">Design and coding by <a href="https://adriapujol.github.io/portfolio/" target="_blank" rel="noreferrer">Adrià Pujol</a> </div>
            </div>
        </div>
    )
}

export default Info;