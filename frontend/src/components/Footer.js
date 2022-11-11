import React from "react";
import Logo from "/React-Clappingo/frontend/src/images/Logo.png";
import Location from "/React-Clappingo/frontend/src/images/Location.png";
import Mobile from "/React-Clappingo/frontend/src/images/Mobile.png";
import Message from "/React-Clappingo/frontend/src/images/Message.png";
import AppBadge from "/React-Clappingo/frontend/src/images/AppBadge.png";
import GoogleBadge from "/React-Clappingo/frontend/src/images/GoogleBadge.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="f-1 f-flex">
        <img src={Logo} alt="logo"></img>
        <span style={{ textAlign: "left" }}>
          Clapingo is a unique platform <br />
          where you practise conversations
          <br /> live with various speakers across
          <br /> the country. This is a judgment-free <br />
          space where people can freely <br />
          speak with a diverse set of people
          <br /> from different backgrounds.
        </span>
        <div className="icons">
          <i className="fab fa-instagram" aria-hidden="true"></i>
          <i className="fab fa-linkedin" aria-hidden="true"></i>
          <i className="fab fa-twitter" aria-hidden="true"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fab fa-facebook" aria-hidden="true"></i>
        </div>
      </div>
      <div className="f-2 f-flex">
        <span className="bolding">Reach us</span>
        <div>
          <img src={Message} alt="message" />
          <span>hello@clappingo.com</span>
        </div>
        <div>
          <img src={Mobile} alt="mobile" />
          <span>+91 6366937113</span>
        </div>
        <div>
          <img src={Location} alt="location" />
          <span>772 Lyonwood Ave Walnut, CA 91789</span>
        </div>
      </div>
      <div className="f-3 f-flex">
        <span className="bolding">Quick Links</span>
        <span>Blogs</span>
        <span>Plans and Pricing</span>
        <span>Signin/Login</span>
        <span>Teach with us</span>
      </div>
      <div className="f-4 f-flex">
        <span className="bolding">Install App</span>
        <img src={GoogleBadge} alt="google" />
        <img src={AppBadge} alt="app" />
        <span>Coming soon!</span>
      </div>
    </div>
  );
};

export default Footer;
