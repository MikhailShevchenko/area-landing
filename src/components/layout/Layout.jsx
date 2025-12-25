import Footer from '../pageComponents/footer/Footer';
import Navbar from '../pageComponents/navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
