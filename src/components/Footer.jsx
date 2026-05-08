import { Link } from "react-router-dom";
import { contactDetails, navLinks, socialLinks } from "../data/siteData";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h2>Fitness HUB</h2>
          <p>
            We believe consistency beats motivation. Join us and take your fitness
            journey to the next level.
          </p>
        </div>

        <div>
          <h3>Navigation</h3>
          <div className="footer-links">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3>Contact</h3>
          <div className="footer-copy">
            {contactDetails.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>

        <div>
          <h3>Follow Us</h3>
          <div className="social-links">
            {socialLinks.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                <img src={social.icon} alt={social.label} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">© Fitness HUB | Thank you</div>
    </footer>
  );
}

export default Footer;
