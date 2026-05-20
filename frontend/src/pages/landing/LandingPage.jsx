import './Landing.css'
import { useState, useEffect } from 'react';
import FeatureCard from '../../components/landing/FeatureCard';
import Hero from '../../components/landing/Hero';
import Loader from '../../components/Loader';
import Header from '../../components/Header';
import GuestNeighborhoods from '../../components/guest_space/GuestNeighborhoods';
import LoadingError from '../../components/errors/ApiLoadingError';

function LandingPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [neighborhoods, setNeighborhoods] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/guest_space/landing_neighborhoods`)
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
      <Header/>
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

export default LandingPage;
