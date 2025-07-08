import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Itinerary from './components/Itinerary';
import Travel from './components/Travel';
import Resources from './components/Resources';
import Destination from './components/Destination';
import Gallery from './components/Gallery';
import Memories from './components/Memories';
import RSVP from './components/RSVP';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Hotels from './components/Hotels';

// Home page component
const HomePage = () => (
  <>
    <Hero />
    <div id="itinerary">
      <Itinerary />
    </div>
    <div id="travel">
      <Travel />
    </div>
    <div id="resources">
      <Resources />
    </div>
    <Destination />
    <div id="gallery">
      <Gallery />
    </div>
    <div id="memories">
      <Memories />
    </div>
    <div id="rsvp">
      <RSVP />
    </div>
  </>
);

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hotels" element={<Hotels />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;