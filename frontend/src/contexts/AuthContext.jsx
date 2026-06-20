import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiFetch } from '../utils/apiFetch';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [apiError, setApiError] = useState(false);
  const navigate = useNavigate();

  const login = async (email, password) => {
    const response = await apiFetch('/session', {
      method: 'POST',
      body: JSON.stringify({
        email_address: email,
        password: password,
      })
    });

    const data = await response.json();

    if (data.errors || data.status === 'error') {
      setApiError(true);
    } else {
      setUser(data.extra.user);
      navigate("/");
    }
  };

  const logout = async () => {
    const response = await apiFetch('/session', {
      method: 'DELETE'
    });

    const data = await response.json();

    if (data.errors) {
      setApiError(true);
    } else {
      setUser(null);
      navigate("/");
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await apiFetch('/profile', { method: 'GET' });
        if (!response.ok) throw new Error('Not logged in');

        const data = await response.json();
        setUser(data.extra.user);
      } catch (error) {
        setApiError(true);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};