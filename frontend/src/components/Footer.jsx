import instagramImg1 from "../assets/instagram-1.jpg";
import instagramImg2 from "../assets/instagram-2.jpg";
import instagramImg3 from "../assets/instagram-3.jpg";
import instagramImg4 from "../assets/instagram-4.jpg";
import instagramImg5 from "../assets/instagram-5.jpg";
import instagramImg6 from "../assets/instagram-6.jpg";

const Footer = () => {
  return (
    <>
      <footer className="section__container footer__container">
        <div className="footer__col">
          <h4>CONTACT INFO</h4>
          <p>
            <span>
              <i className="ri-map-pin-2-fill"></i>
              123, London Bridge Street, London
            </span>
          </p>
          <p>
            <span>
              <i className="ri-mail-fill"></i>
              support@pawsitive.com
            </span>
          </p>
          <p>
            <span>
              <i className="ri-phone-fill"></i>
              (+012) 3456 789
            </span>
          </p>
        </div>
        <div className="footer__col">
          <h4>COMPANY</h4>
          <a href="/">Home</a>
          <a href="/">About Us</a>
          <a href="/">Work With Us</a>
          <a href="/">Our Blogs</a>
          <a href="/">Terms & Condition</a>
        </div>
        <div className="footer__col">
          <h4>USEFUL LINK</h4>
          <a href="/">Home</a>
          <a href="/">About Us</a>
          <a href="/">Work With Us</a>
          <a href="/">Our Blogs</a>
          <a href="/">Terms & Condition</a>
        </div>
        <div className="footer__col">
          <h4>INSTAGRAM</h4>
          <div className="instagram__grid">
            <img src={instagramImg1} alt="" />
            <img src={instagramImg2} alt="" />
            <img src={instagramImg3} alt="" />
            <img src={instagramImg4} alt="" />
            <img src={instagramImg5} alt="" />
            <img src={instagramImg6} alt="" />
          </div>
        </div>
      </footer>
      <div className="footer__bar">
        Copyright © 2025 by Pawsitive. All rights reserved.
      </div>
    </>
  );
};

export default Footer;
