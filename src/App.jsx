import './App.css';
import Benefits from './components/benefitsComponent/Benefits';
import Features from './components/featuresComponent/Features';
import Header from './components/headerComponent/Header';
import Layout from './components/layout/Layout';
import LogoCloud from './components/logoCloudComponent/LogoCloud';

function App() {
  return (
    <div className="app-container">
      <Layout>
        <Header />
        <LogoCloud />
        <Benefits />
        <Features />
      </Layout>
    </div>
  );
}

export default App;
