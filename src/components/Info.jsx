import React from 'react';

function Info({ setShowInfo }) {
    return (
        <div className='modal-container'>
            <div className="modal">
                <div className="info-content">
                    <h1>Instructions</h1>
                    <ul>
                        <li>Try to guess the word one letter at a time.</li>
                        <li>Evey correct guess will show the letter in their place withing the word.</li>
                        <li>Every incorrect guess will bring you one step closer to losing</li>
                        <li>Use the solve button if you know what the word is. Be careful! If you're wrong you'll lose instantly</li>
                        <li>Have fun!</li>
                    </ul>

                </div>
                <button className="btn-play shake" onClick={() => setShowInfo(false)} >Okay!</button>
                <div className="credits">Design and coding by <a href="https://adriapujol.github.io/portfolio/" target="_blank">Adrià Pujol</a> </div>
            </div>
        </div>
    )
}

export default Info;