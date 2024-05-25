"use client";
import React from "react";
import { Box, Text, Link, VStack, Code, Grid, theme } from "@chakra-ui/react";

import Hero from "./Hero";
import Navbar from "./Navbar";
import Wrapper from "./Wrapper";

function scrollToSection() {
  const section = document.getElementById("myComponentId");
  section.scrollIntoView({ behavior: "smooth" });
}

function App() {
  return (
    <>
      <Navbar>
        <Hero />
        <Wrapper classname="Cardcustom" />
      </Navbar>
    </>
  );
}

export default App;
