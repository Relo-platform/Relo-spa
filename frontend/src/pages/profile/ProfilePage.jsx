import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { apiFetch } from '../../utils/apiFetch';

function ProfilePage() {
  const [error, setError] = useState(null);
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>Profile</h1>
      <h2>Hi, {user.email_address}! </h2>
      <div><Link to="/" className="btn-signin" onClick={logout}>Log out</Link></div>
    </div>
  );
}

export default ProfilePage;
