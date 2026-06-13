import { apiFetch } from '../../utils/apiFetch';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Loader  from '../../components/Loader';
import ApiReturnedError from '../../components/errors/ApiReturnedError';

function DashboardPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [apiError, setApiError] = useState(null);
  const [plans, setPlans] = useState(null);
  const [activePlanId, setActivePlanId] = useState(null);

  useEffect(() => {
    apiFetch(`/dashboard`)
      .then(res => res.json())
      .then(data => {
        setPlans(data);
        setIsLoading(false);
      })
      .catch(err => {
        setApiError(err.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', padding: '100px' }}>
        <Loader />
      </div>
    );
  }

  return (
    <>
      {apiError && <ApiReturnedError />}
      <h1>Dashboard</h1>
    </>
  )
}

export default DashboardPage;
