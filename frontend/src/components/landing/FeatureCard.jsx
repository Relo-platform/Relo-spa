const FeatureCard = ({ title, description, imgSrc }) => {
  return (
    <div className="feature-card">
      {imgSrc && <img src={imgSrc} alt={title} className="feature-image" />}
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__description">{description}</p>
    </div>
  )
};

export default FeatureCard;