import React from 'react'
import './Switch.css'

function Switch() {
    return (
        <div className="dark-mode">
            <p className="dark-mode-title">Dark Mode</p>
            <input type="checkbox" className="checkbox" id="checkbox" />
            <label className="switch" htmlfor="checkbox">

            </label>
        </div>
    )
}

export default Switch
