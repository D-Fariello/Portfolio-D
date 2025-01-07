import React, { useEffect } from "react";
import "../../style/_base.scss";

const Home = () => {
  useEffect(() => {
    document.body.className = "";
    document.body.classList.add("home-body");
  }, []);
  return (
    <div className="main-div">
      <h1>Dalila Fariello</h1>
      <h2>Front-End Developer</h2>
    </div>
  );
};

export default Home;
