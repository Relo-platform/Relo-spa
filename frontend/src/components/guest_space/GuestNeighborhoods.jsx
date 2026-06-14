import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './GuestNeighborhoods.css';
import mapImg from '../../assets/landing_map_schema.png';
import { Stars } from '../ui/Icons';
import { renderCostOfLivingBadge, renderCrimeRatingBadge, renderWalkabilityScoreBadge } from '../../utils/metrics';

const GuestNeighborhoods = ({neighborhoods}) => {
  const [isVisible, setIsVisible] = useState(false);
  const columnRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setIsVisible(entries[0].isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (columnRef.current) {
      observer.observe(columnRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="explore-wrapper">
      <div className="explore-layout">
        <div ref={columnRef} className={`explore-left-column ${isVisible ? 'animate-slide' : ''}`}>
          <h2 className="explore-title">Explore & Compare Neighborhoods</h2>
          <div className="explore-table-container">
            <table className="neighborhoods-table">

              <thead>
                <tr>
                  <th>Neighborhood</th>
                  <th>Schools Average Rating*</th>
                  <th>Cost of Living*</th>
                  <th>Safety</th>
                  <th>Walkability</th>
                </tr>
              </thead>

              <tbody>
                {neighborhoods.map((n) => (
                  <tr key={n.id}>
                    <td className="neighborhood-name-cell">{n.neighborhood_name}</td>
                    <td><Stars rating={n.neighborhood_school_rating} size={26}/></td>
                    <td>{renderCostOfLivingBadge(n.neighborhood_cost_of_living)}</td>
                    <td>{renderCrimeRatingBadge(n.neighborhood_crime_index)}</td>
                    <td>{renderWalkabilityScoreBadge(n.neighborhood_walkability_score)}</td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

        <div className="explore-map-container">
          <img src={mapImg} alt="Neighborhoods map" className="explore-map-image" />
          <Link to="/guest/listings" className="explore-map-btn">View Details</Link>
        </div>
      </div>
    </div>
  )
};

export default GuestNeighborhoods;
