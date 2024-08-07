import React from "react";

import FirstSlide from "../Components/FirstSlide";
import SecondSlide from "../Components/SecondSlide";
import ThirdSlide from "../Components/ThirdSlide";
import FourthSlide from "../Components/FourthSlide";
import Services from "../Components/Services";
import Team from "../Components/Team";
import FeedBack from "../Components/FeedBack";
import Contact from "../Components/Contact";
import Package from "../Components/Package";
import FAQ from "../Components/FAQ";
import Footer from "../Components/Footer";
import TopLinks from "../Components/TopLinks";
import Header from "../Components/Header";
//Main Function
function Home() {
  return (
    <div className="scroll-smooth">
      <TopLinks />
      <Header />
      <FirstSlide />
      <SecondSlide />
      <ThirdSlide />
      <FourthSlide />
      <Services />
      <Team />
      <FeedBack />
      <Contact />
      <Package />
      <FAQ />
      <Footer />
    </div>
  );
}

export default Home;
