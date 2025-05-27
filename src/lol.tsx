import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import LandingPage from './components/LandingPage2';
import VisionSection from './components/VisionSection';
import Footer from './components/Footer';
import LocomotiveDashboard from './components/LocomotiveDashboard';

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <StrictMode>
    <LocomotiveDashboard />
  </StrictMode>,
);
