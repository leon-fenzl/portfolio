import React from "react";
import { useState } from "react";
import Navbar from "./comps/Navbar";
import Hero from "./comps/Hero";
import Works from "./comps/Works";
import Footer from "./comps/Footer"
import "./styles/main.css"
import "./styles/app.css"
import "./styles/imgsadress.css"
import "./styles/colors.css"
export default function App(){
  return(
    <>
      <Navbar className={"flex-grid bg-dark-purple"} id={"navbar"}/>
      <Hero className={"flex-grid text-lime"} id={"hero"}/>
      <Works className={"flex-grid works bg-dark-purple text-lime"} id={"works"}/>
      <Works className={"flex-grid works text-lime"} id={"works"}/>
      <Footer className={"flex-grid bg-dark-purple"} id={"contact"}/>
    </>
  );
};
/*
*/