import '../guest_space/ListingCard.css';

const ListingCard = ({
  title,
  bathrooms,
  bedrooms,
  rent_price,
  imageUrls
}) => {

  const imgUrl = imageUrls[0];

  return (
    <div className="listing-card">
      <div className="listing-card-header">
        <h4 className="listing-card-title">{title}</h4>
      </div>

      <div className="listing-card-image-wrapper">
        <img src={imgUrl} alt={title} className="listing-card-image" />
      </div>

      <div className="listing-card-footer">
        <span className="listing-price">${rent_price} <span className="listing-price-period">/ mo</span></span>
        <span className="listing-details">{bedrooms} Bed, {bathrooms} Bath</span>
      </div>
    </div>
  )
}

export default ListingCard;
