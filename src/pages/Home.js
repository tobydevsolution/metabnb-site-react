import React from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Sponsor from "../components/Sponsor";
import Inspiration from "../components/Inspiration";
import MetaNft from "../components/MetaNft";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <Sponsor />
      <Inspiration />
      <MetaNft />
      <Footer />
    </div>
  );
}

export default Home;
