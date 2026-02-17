import React, { useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './components/HomePage';
import PropertyDetails from './components/PropertyDetails';

// ── Scroll Position Restoration ──
const scrollPositions = new Map<string, number>();

const ScrollRestoration: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const prevPath = useRef(location.pathname);

  // Save scroll position before navigating away
  useEffect(() => {
    const handleScroll = () => {
      scrollPositions.set(prevPath.current, window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Restore scroll position on navigation
  useEffect(() => {
    const currentPath = location.pathname;
    if (prevPath.current !== currentPath) {
      // Save the old page's scroll position one final time
      scrollPositions.set(prevPath.current, window.scrollY);
      prevPath.current = currentPath;
    }
    // Restore saved position or scroll to top
    const saved = scrollPositions.get(currentPath);
    window.scrollTo(0, saved ?? 0);
  }, [location.pathname]);

  return <>{children}</>;
};

const App: React.FC = () => {
  return (
    <ScrollRestoration>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/property/:slug" element={<PropertyDetails />} />
      </Routes>
    </ScrollRestoration>
  );
};

export default App;
