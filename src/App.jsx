import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/NavBar";

const App = () => (
  <>
    <Navbar />
    <Hero />

    {/* About Me section */}
    <ShowcaseSection />
    <FeatureCards />

    {/* Experience then Projects then Skills */}
    <Experience />
    <Projects />
    <TechStack />

    <Contact />
    <Footer />
  </>
);

export default App;