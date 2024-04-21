/** @format */

import "./styles/all.scss";
import Menu from "./components/Menu";
import Sections from "./components/Sections";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import { BookingProvider } from "./context/BookingContext";

function App() {
  return (
    <Router>
      <div className="App">
        <BookingProvider>
          <Menu />
          <Sections />
          <Newsletter />
          <Footer />
        </BookingProvider>
        <Menu />
      </div>
    </Router>
  );
}

export default App;
