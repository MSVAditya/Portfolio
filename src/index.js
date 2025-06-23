import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Add smooth scrolling behavior
const originalScrollTo = window.scrollTo;
window.scrollTo = function (options) {
  if (typeof options === 'object' && options.behavior === 'smooth') {
    const start = window.scrollY || window.pageYOffset;
    const end = options.top;
    const duration = 800; // milliseconds
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeInOutCubic = t => t < 0.5 
        ? 4 * t * t * t 
        : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      
      window.scrollTo(0, start + (end - start) * easeInOutCubic(progress));
      
      if (progress < 1) {
        window.requestAnimationFrame(animateScroll);
      }
    };
    
    window.requestAnimationFrame(animateScroll);
  } else {
    originalScrollTo.apply(this, arguments);
  }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
