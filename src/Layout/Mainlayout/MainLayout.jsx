import React from "react";
import { Outlet } from "react-router";
import Header from "../Header/Header";

const MainLayout = ({search, setSearch, searchMovie, watchCount}) => {
  return (
    <>
      <Header search={search} setSearch={setSearch} searchMovie={searchMovie} watchCount={watchCount}/>
      <Outlet/>
    </>
  );
};

export default MainLayout;
