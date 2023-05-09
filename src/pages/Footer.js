import "./Footer.css";

const Footer = () =>{

    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h5>TravelS</h5>
                    <p>Enjoy the journey as much as the destination</p>
                </div>
                <div>
                    <a href="https://www.facebook.com/aangelooooo/">
                        <i className="fa-brands fa-facebook-square"></i>
                        </a>
                        <a href="/">
                        <i className="fa-brands fa-instagram-square"></i>
                        <i className="fa-brands fa-twitter-square"></i>
                        <i className="fa-brands fa-youtube-square"></i>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Footer;