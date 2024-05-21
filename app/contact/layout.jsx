import React from "react";
import TopLinks from "../Components/TopLinks";
import Header from "../Components/Header";
export default function layout({ children }) {
  return (
    <div>
      <TopLinks />
      <Header />
      {children}
    </div>
  );
}
