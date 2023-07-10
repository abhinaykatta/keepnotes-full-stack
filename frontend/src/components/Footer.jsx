import React from 'react'

function Footer() {
    let year = new Date().getFullYear();
    return (
        <div className='footer'>
            <p > Abhinay Katta {year}</p>
        </div>
    )
}

export default Footer
