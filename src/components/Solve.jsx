import React, { useEffect } from 'react'

function Solve({ setShowSolve }) {

    const handleSolveClick = (e) => {
        e.preventDefault();
        setShowSolve(false);
    }

    return (
        <div className='modal-container'>
            <div className="modal">
                <div className="solve">
                    <input autoFocus type="text" />
                </div>
                <button className="btn-play shake" onClick={handleSolveClick} >Okay!</button>
            </div>
        </div>
    )
}

export default Solve