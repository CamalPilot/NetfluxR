import React from "react";
import { Outlet } from "react-router";
import Header from "../Header/Header";

const MainLayout = ({searchMovie}) => {
  return (
    <>
      <Header  searchMovie={searchMovie}/>
      <Outlet/>
    </>
  );
};

export default MainLayout;
