const Footer = () => {
    let currentDate = new Date().getFullYear();
    
    
    return (
        <div>
            <p className="footer"> Copyright {currentDate}</p>
        </div>
    );
}

export default Footer;