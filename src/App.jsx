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

function App() {
  return (
    <div className="app-container">
      <Layout>
        <main>
          <Header />
          <LogoCloud />
          <Benefits />
          <Features />
          <Specifications />
          <Testimonial />
          <HowTo />
          <HeroImageComponent />
          <CTA />
        </main>
      </Layout>
    </div>
  );
}

export default App;
