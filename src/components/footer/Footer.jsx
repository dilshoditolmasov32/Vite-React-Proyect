import "./Footer.css";
import footerLogo from "../../images/footer-logo.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram, FaYoutube } from "react-icons/fa6";
import { TiSocialTwitter } from "react-icons/ti";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-page">
      <div className="container">
        <div className="footer-section">
          <div>
            <img src={footerLogo} alt="logo" />
            <h2>Bespoke software solutions</h2>
            <div className="social-media">
              <FaFacebookF className="facebook" />
              <FaYoutube className="youTube" />
              <FaInstagram className="instagram" />
              <TiSocialTwitter className="twitter" />
            </div>
          </div>
          <div>
            <h5>Company</h5>
            <Link className="footer-link">About Us</Link>
            <Link className="footer-link">Careers</Link>
            <Link className="footer-link">Services</Link>
            <Link className="footer-link">Blog</Link>
          </div>
          <div>
            <h5>Connect</h5>
            <Link
              className="email"
              hrefLang="https://mail.google.com/mail/u/0/#inbox"
            >
              hi@finsweet.com
            </Link>
            <Link className="phone" hrefLang="+(123) 456-7890">
              +(123) 456-7890
            </Link>
          </div>
          <div>
            <h5>Join Newsletter</h5>
            <form>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Type email here"
                required
              />
              <button className="btn-submit" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="footer_text">
          <h6>© All rights reserved - Finsweet</h6>
          <div className="footer-page-switcher">
            <h6>Privacy Policy</h6>
            <h6>Terms & Conditions</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
