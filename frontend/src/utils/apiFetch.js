function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

export const apiFetch = async (endpoint, options = {}) => {
  const url = `${import.meta.env.VITE_API_URL}${endpoint}`;

  const csrfToken = getCookie('XSRF-TOKEN');

  const fetchOptions = {
    ...options,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...(csrfToken && { 'X-CSRF-Token': decodeURIComponent(csrfToken) }),
      ...options.headers,
    },
  };

  return fetch(url, fetchOptions);
};
