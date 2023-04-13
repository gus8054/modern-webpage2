import React from "react";
import "./app.css";
import Navbar from "./components/Navbar/Navbar";
import { About, Awards, Chef, FindUs, Footer, Gallery, Header, Prices, Video, Newsletter } from "./containers";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Prices />
      <Chef />
      <Video />
      <Awards />
      <Gallery />
      <FindUs />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
