import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import FeaturedProject from './components/FeaturedProject';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Services from './components/Services';
import GithubStats from './components/GithubStats';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => (
  <div className="min-h-screen bg-base text-white">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Skills />
      <FeaturedProject />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Services />
      <GithubStats />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default App;
