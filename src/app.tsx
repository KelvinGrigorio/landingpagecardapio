import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Benefits from './components/Benefits';
import Demo from './components/Demo';
import Pricing from './components/Pricing';
import Limitations from './components/Limitations';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Problem />
      <Solution />
      <Benefits />
      <Demo />
      <Pricing />
      <Limitations />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
