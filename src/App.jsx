import './App.css';
import Header from './components/headerComponent/Header';
import Layout from './components/layout/Layout';
import LogoCloud from './components/logoCloudComponent/LogoCloud';

function App() {
  return (
    <div className="app-container">
      <Layout>
        <Header />
        <LogoCloud />
      </Layout>
    </div>
  );
}

export default App;
