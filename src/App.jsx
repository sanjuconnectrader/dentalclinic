import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Homepgae from './pages/Homepgae';

// NEW: Scroll to #section if hash exists
const ScrollToHashElement = () => {
  const location = useLocation();

  React.useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 200); // Timeout ensures DOM is ready
      }
    }
  }, [location]);

  return null;
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <>
      <ScrollToTop />
      <ScrollToHashElement />
      <Routes>
        <Route path='/' element={<Homepgae/>} />
      </Routes>
    </>
  );
};

export default App;
