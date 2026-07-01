import '../guest_space/ListingCard.css';
import { apiFetch } from '../../utils/apiFetch';

const ListingCard = ({
  id,
  title,
  bathrooms,
  bedrooms,
  rent_price,
  imageUrls,
  saved
}) => {

  const imgUrl = imageUrls[0];

  const handleLike = async () => {
    saved.onLike(id);
    try {
      await apiFetch(`/saved_listings`, {
        method: 'POST',
        body: JSON.stringify({ listing_id: id })
      });
    } catch (err) {
      saved.onRemove(id);
      console.error(err);
    }
  }

  const handleRemove = async () => {
    saved.onRemove(id);
    try {
      await apiFetch(`/saved_listings/${id}`, {
        method: 'DELETE'
      });
    } catch (err) {
      saved.onLike(id);
      console.error(err);
    }
  }

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
        {saved.ids.has(id)
          ? <button onClick={handleRemove}>Remove</button>
          : <button onClick={handleLike}>Like</button>
        }
      </div>
    </div>
  )
}

export default ListingCard;
