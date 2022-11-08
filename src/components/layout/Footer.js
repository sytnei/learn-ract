import React from 'react'


const Footer = () => {
    let currentDate = new Date().getFullYear();

    return (
        <>
       <p className="footer"> Copyright {currentDate}</p>
        </>
    )
}

export default Footer;