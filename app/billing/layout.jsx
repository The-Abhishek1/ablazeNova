import React from "react";
import TopLinks from "../Components/TopLinks";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
export default function layout({ children }) {
  return (
    <div>
      <TopLinks />
      <Header />
      {children}
      <Footer />
    </div>
  );
}
