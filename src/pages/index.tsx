import React from "react";
import Banner from "../components/banner";
import MoviesGrid from "../components/moviesgrid";

const Home = () => {
  return (
    <React.Fragment>
      <Banner />
      <MoviesGrid />
    </React.Fragment>
  );
};

export default Home;
