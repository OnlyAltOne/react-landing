import React from "react"
import logo from "../../assets/logo-dark.png"
import "./Footer.scss"

const Footer = () => {
    return(
        <section className="footer">
            <div className="links_wrapper">
            <div className="links">
                <ul className="footer_links">
                    <li className="footer_link">Home</li>
                    <li className="footer_link">About</li>
                    <li className="footer_link">Work</li>
                    <li className="footer_link">Contact</li>
                </ul>
                <ul className="footer_links">
                    <li className="footer_link">Facebook</li>
                    <li className="footer_link">Twitter</li>
                    <li className="footer_link">Instagram</li>
                    <li className="footer_link">YouTube</li>
                </ul>
                <ul className="footer_links">
                    <li className="footer_link">Subscribe</li>
                    <li className="footer_link">Privacy Policy</li>
                    <li className="footer_link"> Terms&Condtions</li>
                </ul>
            </div>
            </div>
            
            <div className="footer_bottom">
                <img src={logo} alt="logo"/>
            </div>
        </section>
    )
}

export default Footer