import './App.css';
import Benefits from './components/pageComponents/benefitsComponent/Benefits';
import Features from './components/pageComponents/featuresComponent/Features';
import Header from './components/pageComponents/headerComponent/Header';
import Layout from './components/layout/Layout';
import LogoCloud from './components/pageComponents/logoCloudComponent/LogoCloud';
import Specifications from './components/pageComponents/specificationsComponent/Specifications';
import Testimonial from './components/pageComponents/testimonialComponent/Testimonial';
import HowTo from './components/pageComponents/howItWorksComponent/HowTo';
import HeroImageComponent from './components/pageComponents/heroImageComponent/HeroImageComponent';
import CTA from './components/pageComponents/centeredCTAComponent/CTA';
import Reveal from './components/UI/reveal/Reveal';

function App() {
  return (
    <div className="app-container">
      <Layout>
        <main>
          <Reveal>
            <Header />
          </Reveal>
          <Reveal>
            <LogoCloud />
          </Reveal>
          <Reveal>
            <Benefits />
          </Reveal>
          <Reveal>
            <Features />
          </Reveal>
          <Reveal>
            <Specifications />
          </Reveal>
          <Reveal>
            <Testimonial />
          </Reveal>
          <Reveal>
            <HowTo />
          </Reveal>
          <Reveal>
            <HeroImageComponent />
          </Reveal>
          <Reveal>
            <CTA />
          </Reveal>
        </main>
      </Layout>
    </div>
  );
}

export default App;
