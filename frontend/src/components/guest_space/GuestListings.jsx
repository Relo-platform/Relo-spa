import { Link } from 'react-router-dom';
import ListingCard from '../listings/ListingCard';
import './GuestListings.css';

const GuestListings = ({listings, savedListingIds, addToSaved, removeFromSaved}) => {

  return (
    <div className="guest-listings-wrapper">

      <div className="guest-listings-header">
        <h2 className="guest-listings-title">Track & Compare Apartments</h2>
      </div>

      <div className="guest-listings-grid">
        {listings.map(listing => (
          <ListingCard
            key={listing.id}
            id={listing.id}
            title={listing.title}
            bathrooms={listing.bathrooms}
            bedrooms={listing.bedrooms}
            rent_price={listing.rent_price}
            imageUrls={listing.image_urls}
            saved={{ ids: savedListingIds, onLike: addToSaved, onRemove: removeFromSaved }}
          />
        ))}
      </div>

      <div className="guest-listings-footer">
        <Link to="/listings" className="explore-map-btn">
          Compare Listings
        </Link>
      </div>

    </div>
  )
};

export default GuestListings;
