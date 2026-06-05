import { Link } from 'react-router-dom';
import './Header.css';

const GuestHeader = () => {
  return (
    <header className="guest-header-wrapper">
      <div className="guest-header">

        <div className="header-logo">
          <Link to="/">
            <h2>Relo</h2>
          </Link>
        </div>

        <div className="header-divider"></div>

        <nav className="header-nav">
          <Link to="/">Compare Cities</Link>
          <Link to="/">Neighborhoods</Link>
          <Link to="/guest/listings">Apartments</Link>
          <Link to="/planner">Move Planner</Link>
          <Link to="/">Resources</Link>
        </nav>

        <div className="header-divider"></div>

        <div className="header-actions">
          <Link to="/register" className="btn-signin">Sign in</Link>
          <Link to="/login" className="btn-start">Start Planning</Link>
        </div>

      </div>
    </header>
  );
};

export default GuestHeader;
