import './App.css';
import Benefits from './components/pageComponents/benefitsComponent/Benefits';
import Features from './components/pageComponents/featuresComponent/Features';
import Header from './components/pageComponents/headerComponent/Header';
import Layout from './components/layout/Layout';
import LogoCloud from './components/pageComponents/logoCloudComponent/LogoCloud';
import Specifications from './components/pageComponents/specificationsComponent/Specifications';

function App() {
  return (
    <div className="app-container">
      <Layout>
        <header>
          <Header />
        </header>
        <main>
          <LogoCloud />
          <Benefits />
          <Features />
          <Specifications />
        </main>
      </Layout>
    </div>
  );
}

export default App;
