export const CheckmarkIcon = ({size = 24, color = "var(--color-green-bg-button-)"}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

export const CrossIcon = ({size = 24}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#E76F51" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="15" y1="9" x2="9" y2="15"></line>
    <line x1="9" y1="9" x2="15" y2="15"></line>
  </svg>
);

export const TildeIcon = ({size = 24}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#F2C94C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M8 12 Q10 9 12 12 T16 12"></path>
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

