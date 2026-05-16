import './App.css'
import { useState, useEffect } from 'react';
import FeatureCard from './components/FeatureCard';
import Hero from './components/Hero';
import Loader from './components/Loader';
import GuestNeighborhoods from './components/GuestNeighborhoods';
import LoadingError from './components/errors/ApiLoadingError';

const BASE_API_LINK = 'http://localhost:3001/v1';

function App() {
  const [neighborhoods, setNeighborhoods] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${BASE_API_LINK}/guest_space/landing_neighborhoods`)
      .then(res => res.json())
      .then(data => {
        setNeighborhoods(data);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Hero/>
      <div className="features-section">
        <FeatureCard title="Compare Locations" description="Evaluate cities and neighborhoods."/>
        <FeatureCard title="Find the Perfect Place" description="Search & track apartments."/>
        <FeatureCard title="Manage Your Move" description="Organize your relocation steps."/>
      </div>
      <div className="loader-wrapper">
        {isLoading ? (
          <Loader/>
          ) : error ? (
          <LoadingError/>
          ) : (
          <GuestNeighborhoods neighborhoods = {neighborhoods}/>
        )};
      </div>
    </>
  )
}

export default App
