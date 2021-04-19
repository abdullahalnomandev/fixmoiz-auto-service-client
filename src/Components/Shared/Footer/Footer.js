import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
const Footer = () => {
    const noNamed = [
        {name: "Emergency booking" , link: "/home"},
        {name: "Book" , link: "/home"},
        {name: "Another extra help" , link: "/home"},
        {name: "car engine" , link: "/home"},
        {name: "Check Up" , link: "/home"},
    ]
    const ourAddress = [
        {name: "Address: 1379 Shoreline Parkway, Mountain View, CA 94043, United States." , link: "google.com"},
        {name: "Yards" , link: "//google.com/map"},
       
    ]
    const oralHealth = [
        {name: "Emergency booking" , link: "/home"},
        {name: "Book" , link: "/home"},
        {name: "Another extra help" , link: "/home"},
        {name: "car engine" , link: "/home"},
        {name: "Check Up" , link: "/home"},
    ]
    const services = [
        {name: "Emergency booking" , link: "/home"},
        {name: "Book" , link: "/home"},
        {name: "Another extra help" , link: "/home"},
        {name: "car engine" , link: "/home"},
        {name: "Check Up" , link: "/home"},
    ]
    return (
        <footer className="footer-area clear-both">
        <div className="container pt-5">
            <div className="row py-5">
                <FooterCol key={1} menuTitle={"."} menuItems={noNamed}/>
                <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                <FooterCol key={3} menuTitle="Oral Health" menuItems={oralHealth}/>
                <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                    <ul className="social-media list-inline">
                        
                    </ul>
                
                </FooterCol>
            </div>
            <div className="copyRight text-center">
                <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
            </div>
        </div>
    </footer>
    );
};

export default Footer;