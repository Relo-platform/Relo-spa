import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Header.css';
import logo from '../assets/relo-full-logo.png';

const ProfileSwitcher = () => {
  const { user } = useAuth();

  if (user) {
    return (
      <div className="header-actions">
        <Link to="/profile" className="btn-signin">Profile</Link>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="header-actions">
        <Link to="/login" className="btn-signin">Sign in</Link>
        <Link to="/register" className="btn-start">Sign up</Link>
      </div>
    )
  }
}

const GuestHeader = () => {
  return (
    <header className="guest-header-wrapper">
      <div className="guest-header">

        <div className="header-logo">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src={logo} alt="Relo" className="logo-img" />
          </Link>
        </div>

        <div className="header-divider"></div>

        <nav className="header-nav">
          <Link to="/">Compare Cities</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/guest/listings">Apartments</Link>
          <Link to="/planner">Move Planner</Link>
          <Link to="/">Resources</Link>
        </nav>

        <div className="header-divider"></div>

        <ProfileSwitcher/>
      </div>
    </header>
  );
};

export default GuestHeader;
