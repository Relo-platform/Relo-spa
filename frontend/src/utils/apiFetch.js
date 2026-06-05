export const apiFetch = async (endpoint, options = {}) => {
  const url = `${import.meta.env.VITE_API_URL}${endpoint}`;

  const fetchOptions = {
    ...options,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  };

  return fetch(url, fetchOptions);
};