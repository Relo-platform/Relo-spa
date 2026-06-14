import { CheckmarkIcon, CrossIcon, TildeIcon } from '../components/ui/Icons';

export const renderCostOfLivingBadge = (index) => {
  if (index <= 95) {
    return <span className="cost-badge__high"><CheckmarkIcon size={36}/></span>;

  } else if (index >= 105) {
    return <span className="cost-badge__low"><CrossIcon size={36}/></span>;
  }

  return <span className="cost-badge__average"><TildeIcon size={36}/></span>;
};

export const renderCrimeRatingBadge = (index) => {
  if (index <= 90) {
    return <span className="crime-badge__low"><CheckmarkIcon size={36}/></span>;
  } else if (index >= 105) {
    return <span className="crime-badge__high"><CrossIcon size={36}/></span>;
  }

  return <span className="crime-badge__average"><TildeIcon size={36}/></span>;
};

export const renderWalkabilityScoreBadge = (index) => {
  if (index <= 90) {
    return <span className="low"><CrossIcon size={36}/></span>;
  } else if (index >= 105) {
    return <span className="high"><CheckmarkIcon size={36}/></span>;
  }

  return <span className="average"><TildeIcon size={36}/></span>;
};
