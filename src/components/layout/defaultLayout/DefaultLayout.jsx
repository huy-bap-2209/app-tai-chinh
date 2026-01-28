import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";

function DefaultLayout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
