import { useState, useEffect, useRef } from 'react';
import { CheckmarkIcon } from '../ui/Icons';
import './GuestTimeline.css';

const GuestTimeline = () => {
  const [isVisible, setIsVisible] = useState(false);
  const trackRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setIsVisible(entries[0].isIntersecting);
      },
      { threshold: 0.4 }
    );

    if (trackRef.current) observer.observe(trackRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="guest-timeline-wrapper">
      <h2 className="guest-timeline-title">Stay on Top of Your Move</h2>
      <div className="timeline-top-divider"></div>

      <div className="timeline-layout">
        <div className="timeline-checklist-card">
          <div className="checklist-item">
              <span className="checklist-icon"><CheckmarkIcon size={24} /></span>
              <span className="checklist-text">Set Moving Date</span>
            </div>
            <div className="checklist-divider"></div>

            <div className="checklist-item">
              <span className="checklist-icon"><CheckmarkIcon size={24} /></span>
              <span className="checklist-text">Hire Moving Company</span>
            </div>
            <div className="checklist-divider"></div>

            <div className="checklist-item">
              <span className="checklist-icon"><CheckmarkIcon size={24} /></span>
              <span className="checklist-text">Update Address</span>
            </div>
          </div>

        {/* Правая часть: Таймлайн с анимацией */}
        <div ref={trackRef} className={`timeline-track-container ${isVisible ? 'animate-timeline' : ''}`}>
          <div className="timeline-line"></div>

          <div className="timeline-steps">
            <div className="timeline-node">
              <div className="node-circle node-green">
                <CheckmarkIcon size={34} color="white" />
              </div>
              <span className="node-label">Lease Approved</span>
            </div>

            <div className="timeline-node">
              <div className="node-circle node-orange">
                <CheckmarkIcon size={34} color="white" />
              </div>
              <span className="node-label">Pack & Prepare</span>
            </div>

            <div className="timeline-node">
              <div className="node-circle node-gray">
                <CheckmarkIcon size={34} color="white" />
              </div>
              <span className="node-label">Moving Day!</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
};

export default GuestTimeline;
