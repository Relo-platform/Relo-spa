export const CheckmarkIcon = ({size}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="var(--color-green-bg-button-)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

export const StarIcon = ({ type, size = 18 }) => {
  if (type === 'half') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" stroke="none">
        <defs>
          <linearGradient id="halfStarGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="50%" stopColor="#F2C94C" />
            <stop offset="50%" stopColor="#E2E8F0" />
          </linearGradient>
        </defs>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="url(#halfStarGradient)"></polygon>
      </svg>
    );
  }

  const fillColor = type === 'full' ? "#F2C94C" : "#E2E8F0";
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fillColor} stroke="none">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );
};

export const Stars = ({ rating, size = 18 }) => {
  return (
    <div style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;

        let starType = 'empty';
        if (rating >= starValue) {
          starType = 'full';
        } else if (rating >= starValue - 0.5) {
          starType = 'half';
        }

        return <StarIcon key={index} type={starType} size={size} />;
      })}
    </div>
  );
};
