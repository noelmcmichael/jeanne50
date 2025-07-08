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

function App() {
  return (
    <div>
      <Navigation />
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
      <Footer />
    </div>
  );
}

export default App;