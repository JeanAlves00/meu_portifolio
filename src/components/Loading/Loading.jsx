import { useState, useEffect } from 'react';
import './Styles.css';

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (document.readyState === 'complete') {
      setIsLoading(false);
    } else {
      window.addEventListener('load', () => {
        setIsLoading(false);
      });
    }

    return () => {
      window.removeEventListener('load', () => {
        setIsLoading(false);
      });
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loading-wrapper">
      <div className="loading-container">
        <div className="loading-circle"></div>
        <div className="loading-circle"></div>
        <div className="loading-circle"></div>
      </div>
      <div className="loading-text">
        <span>C</span>
        <span>A</span>
        <span>R</span>
        <span>E</span>
        <span>G</span>
        <span>A</span>
        <span>N</span>
        <span>D</span>
        <span>O</span>
      </div>
    </div>
  );
};

export default Loading;