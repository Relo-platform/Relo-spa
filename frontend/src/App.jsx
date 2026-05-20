import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing/LandingPage';
import GuestListingsPage from './pages/listings/GuestListingsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/guest/listings" element={<GuestListingsPage /> } />

      <Route path="*" element={
        <div style={{padding: '50px', textAlign: 'center', color: 'red'}}><h2>404 - This page does not exists</h2></div>
      } />
    </Routes>
  );
}

export default App;
