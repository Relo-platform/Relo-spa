import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="relo-footer">
      <div className="container footer-content">

        <div className="footer-brand">
          <h3 className="footer-logo">Relo.</h3>
          <p className="footer-description">
            Your ultimate companion for a seamless, stress-free relocation. Track, compare, and move with confidence.
          </p>
        </div>

        <div className="footer-links-group">
          <h4 className="footer-heading">Product</h4>
          <Link to="/listings" className="footer-link">Apartments</Link>
          <Link to="/neighborhoods" className="footer-link">Neighborhoods</Link>
          <Link to="/planner" className="footer-link">Moving Planner</Link>
          <Link to="/pricing" className="footer-link">Pricing</Link>
        </div>

        <div className="footer-links-group">
          <h4 className="footer-heading">Company</h4>
          <Link to="/about" className="footer-link">About Us</Link>
          <Link to="/careers" className="footer-link">Careers</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
          <Link to="/blog" className="footer-link">Blog</Link>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-flex">
          <span className="footer-copyright">© {new Date().getFullYear()} Relo Inc. All rights reserved.</span>
          <div className="footer-legal">
            <Link to="/privacy" className="footer-link">Privacy Policy</Link>
            <Link to="/terms" className="footer-link">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
