import React from "react";
import "./footer.css";
import { GiSpoon } from "react-icons/gi";
import { SlSocialFacebook, SlSocialTwitter, SlSocialInstagram } from "react-icons/sl";
const Footer = () => {
  return (
    <section id="footer" className="footer section__padding">
      <div className="footer__container app__container">
        <dl className="footer__contact-us">
          <dt>Contact Us</dt>
          <dd>Buk-gu, Busan, Republic of Korea</dd>
          <dd>+82 10-123-4567</dd>
        </dl>
        <div className="footer__gericht">
          <h2>GERICHT</h2>
          <p>"The Best Way TO Find Yourself Is To Lose Yourself In The Service Of Others."</p>
          <GiSpoon size={"3rem"} className="spoon" />
          <div className="footer__sns">
            <a href="#">
              <SlSocialFacebook size={"1.5rem"} />
            </a>
            <a href="#">
              <SlSocialTwitter size={"1.5rem"} />
            </a>
            <a href="#">
              <SlSocialInstagram size={"1.5rem"} />
            </a>
          </div>
        </div>
        <dl className="footer__working-hours">
          <dt>Working Hours</dt>
          <dl className="footer__working-hours__day">
            <dt>Monday-Friday:</dt>
            <dd>08:00 Am - 12:00 Am</dd>
            <dt>Saturday-Sunday:</dt>
            <dd>07:00 Am - 11:00 Am</dd>
          </dl>
        </dl>
        <div className="footer__copyright">&copy; 2023 Gericht.</div>
      </div>
    </section>
  );
};

export default Footer;
