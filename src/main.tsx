import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import LandingPage from './components/LandingPage2';
import MissionSection from './components/MissionSection';
import CallToActionSection from './components/CallToAction';
import ContactPage from './pages/ContactPage'; // your new contact page
import NotFoundPage from './pages/NotFoundPage';

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar isLandingPage={true} />
              <LandingPage />
              <MissionSection />
              <CallToActionSection />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Navbar isLandingPage={false} />
              <ContactPage />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <Navbar isLandingPage={false} />
              <NotFoundPage />
            </>
          }
        />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>,
);
