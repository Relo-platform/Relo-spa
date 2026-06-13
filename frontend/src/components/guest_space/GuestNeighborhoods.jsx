import './GuestNeighborhoods.css';
import mapImg from '../../assets/landing_map_schema.png';
import { Stars, CheckmarkIcon } from '../ui/Icons';

const GuestNeighborhoods = ({neighborhoods}) => {
  return (
    <div className="explore-wrapper">
      <div className="explore-layout">
        <div className="explore-left-column">
          <h2 className="explore-title">Explore & Compare Neighborhoods</h2>
          <div className="explore-table-container">
            <table className="neighborhoods-table">

              <thead>
                <tr>
                  <th>Neighborhood</th>
                  <th>Cost of Living</th>
                  <th>Schools</th>
                  <th>Safety</th>
                  <th>Walkability</th>
                </tr>
              </thead>

              <tbody>
                {neighborhoods.map((n) => (
                  <tr key={n.id}>
                    <td className="neighborhood-name-cell">{n.neighborhood_name}</td>
                    <td><Stars rating={n.neighborhood_cost_of_living} size={26}/></td>
                    <td>{n.neighborhood_school_rating ? <CheckmarkIcon size={36} /> : null}</td>
                    <td>{n.neighborhood_crime_index}</td>
                    <td>{n.neighborhood_walkability_score}</td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

        <div className="explore-map-container">
          <img src={mapImg} alt="Neighborhoods map" className="explore-map-image" />
          <button className="explore-map-btn">View Details</button>
        </div>
      </div>
    </div>
  )
};

export default GuestNeighborhoods;
