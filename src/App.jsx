import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Stats from './components/Stats.jsx';
import Committees from './components/Committees.jsx';
import About from './components/About.jsx';
import Pricing from './components/Pricing.jsx';
import Contact from './components/Contact.jsx';
//mport Register from './components/Register.jsx';
import Footer from './components/Footer.jsx';
import Globe from './components/Globe.jsx';
import ScrollProgressBar from './components/ScrollProgressBar.jsx';
import './styles/globals.css';

function App() {
  return (
    <div className="relative">
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />
      
      {/* 3D Background Globe */}
      <Globe />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <Hero />
        <Stats />
        <Committees />
        <Pricing />
        <About />
        <Contact />
        
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;