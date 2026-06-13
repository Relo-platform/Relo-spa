import './Landing.css'
import { useState, useEffect } from 'react';
import FeatureCard from '../../components/landing/FeatureCard';
import Hero from '../../components/landing/Hero';
import Loader from '../../components/Loader';
import Header from '../../components/Header';
import GuestNeighborhoods from '../../components/guest_space/GuestNeighborhoods';
import LoadingError from '../../components/errors/ApiLoadingError';

import mapImg from '../../assets/landing_map.png';
import marksImg from '../../assets/landing_marks.png';
import houseImg from '../../assets/landing_house.png';

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

      <section className="features-section">
        <div className="container features-flex">
          <FeatureCard
            imgSrc={mapImg}
            title="Compare Locations"
            description="Evaluate cities and neighborhoods"
          />

          <div className="vertical-divider"></div>

          <FeatureCard
            imgSrc={houseImg}
            title="Find the Perfect Place"
            description="Search & track apartments"
          />

          <div className="vertical-divider"></div>

          <FeatureCard
            imgSrc={marksImg}
            title="Manage Your Move"
            description="Organize your relocation steps"
          />
        </div>
      </section>

      <section className="explore-section">
        <div className="container">
          {isLoading ? (
            <Loader/>
            ) : error ? (
            <LoadingError/>
            ) : (
            <GuestNeighborhoods neighborhoods = {neighborhoods}/>
          )}
        </div>
      </section>

      <section className="сompare-apartments-section">
        <div className="container">
          todo
        </div>
      </section>
    </>
  )
}

export default LandingPage;
